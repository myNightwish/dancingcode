# 这些目标被声明为伪目标，确保 make 不会将其与同名文件混淆。
.PHONY: dist test
# 直接运行 make，会执行 default 目标，因为这是文件中的第一个目标 从而执行 help指令
default: help

install:
	npm install --registry=http://registry.npm.taobao.org

dist: install-cn
	npm run dist

dev:
	npm run dev

devp:
	npm run dev:play

new:
	node build/bin/new.js $(COMPONENT)

buildfile: new
	npm run build:file

buildTheme: buildfile
	npm run build:theme

init: buildTheme
	@echo '组件初始化已完成...🎉'

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake new <component-name> [中文名]\033[0m\t---  创建新组件 package. 例如 'make new button 按钮'"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35mmake dist\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  编译项目，生成目标文件"
	@echo "   \033[35mmake deploy\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  部署 demo"
	@echo "   \033[35mmake pub\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  发布到 npm 上"
	@echo "   \033[35mmake new-lang <lang>\033[0m\t\033[0m\t\033[0m\t---  为网站添加新语言. 例如 'make new-lang fr'"
