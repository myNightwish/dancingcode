# 自动化地构建项目，将构建好的文件上传到 GitHub 仓库的 gh-pages 分支，并部署到国内站点。
# 整个过程通过创建临时目录、克隆仓库、复制文件、部署站点来完成


# 告诉操作系统使用 /bin/sh 解释器来运行该脚本。
#! /bin/sh
mkdir temp_web
# 执行部署脚本
npm run deploy:build
cd temp_web
# --depth 1 表示只克隆最新的提交，--single-branch 表示只克隆指定的分支
git clone --depth 1 -b gh-pages --single-branch https://github.com/myNightwish/dancingcode.git && cd dancingcode

# build sub folder
# 创建一个子文件夹 2.5。
SUB_FOLDER='2.5'
mkdir $SUB_FOLDER
# 删除当前目录中的所有 .js、.css、.map 文件和 static 目录
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
# 复制 ../../examples/element-ui/ 目录中的所有文件到当前目录和 2.5 子文件夹
cp -rf ../../examples/element-ui/** .
cp -rf ../../examples/element-ui/** $SUB_FOLDER/
cd ../..

# deploy domestic site
# 使用 faas 命令部署项目到 alpha 环境（具体命令可能依赖于 faas CLI 工具）
faas deploy alpha
rm -rf temp_web