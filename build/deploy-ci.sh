#! /bin/sh
mkdir temp_web
git config --global user.name "miui-bot"
git config --global user.email "2575329556@qq.com"

# 如果环境变量 ROT_TOKEN 为空，脚本会打印 "Bye~" 并退出。ROT_TOKEN 可能是用于访问 GitHub 的令牌。
if [ "$ROT_TOKEN" = "" ]; then
  echo "Bye~"
  exit 0
fi

# release
# 如果存在 TRAVIS_TAG（表示这是一个标签构建），则进行以下操作：

# 运行 npm run dist 构建库文件。
# 创建一个临时目录 temp_web，并克隆 ElementUI/lib 仓库。
# 删除除了 README.md 之外的所有文件。
# 将构建的库文件复制到仓库中。
# 提交更改并打上标签，然后推送到远程仓库。
if [ "$TRAVIS_TAG" ]; then
  # build lib
  npm run dist
  cd temp_web
  git clone https://$ROT_TOKEN@github.com/myNightwish/dancingcode.git && cd lib
  rm -rf `find * ! -name README.md`
  cp -rf ../../lib/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ../..

  # build theme-chalk
  cd temp_web
  git clone https://$ROT_TOKEN@github.com/myNightwish/dancingcode.git && cd packages/theme-chalk
  rm -rf *
  cp -rf ../../packages/theme-chalk/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ../..

  # build site
  npm run deploy:build
  cd temp_web
  git clone --depth 1 -b gh-pages --single-branch https://$ROT_TOKEN@github.com/myNightwish/dancingcode.git && cd element
  # build sub folder
  echo $TRAVIS_TAG

  SUB_FOLDER='2.5'
  mkdir $SUB_FOLDER
  rm -rf *.js *.css *.map static
  rm -rf $SUB_FOLDER/**
  cp -rf ../../examples/element-ui/** .
  cp -rf ../../examples/element-ui/** $SUB_FOLDER/
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin gh-pages
  cd ../..

  echo "DONE, Bye~"
  exit 0
fi

# build dev site
npm run build:file && CI_ENV=/dev/$TRAVIS_BRANCH/ node_modules/.bin/cross-env NODE_ENV=production node_modules/.bin/webpack --config build/webpack.demo.js
cd temp_web
git clone https://$ROT_TOKEN@github.com/ElementUI/dev.git && cd dev
mkdir $TRAVIS_BRANCH
rm -rf $TRAVIS_BRANCH/**
cp -rf ../../examples/element-ui/** $TRAVIS_BRANCH/
git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin master
cd ../..

# push dev theme-chalk
cd temp_web
git clone -b $TRAVIS_BRANCH https://$ROT_TOKEN@github.com/ElementUI/theme-chalk.git && cd theme-chalk
rm -rf *
cp -rf ../../packages/theme-chalk/** .
git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin $TRAVIS_BRANCH
cd ../..
