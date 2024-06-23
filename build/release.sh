# 用于发布新版本的 shell 脚本，包括版本号输入、构建、发布主题、提交更改、推送到远程仓库以及发布到 npm


# 切换到 main，然后将 dev 分支合并到 main
git checkout main
git merge dev

# 告诉操作系统使用 /usr/bin/env 中找到的 sh 解释器来运行该脚本
#!/usr/bin/env sh

# 启用脚本中的命令出错时立刻退出，保证脚本不会在某个命令失败后继续运行
set -e
# 提示用户输入发布的版本号，并将输入的值存储在 VERSION 变量中。
echo "Enter release version: "
read VERSION
# 提示用户确认是否要发布指定版本
# 在脚本中使用变量时，需要在变量名前加上$符号来获取变量的值。这是Shell脚本中的语法规则，用来区分普通字符串和变量。
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # 设置环境变量 VERSION 并运行 npm run dist 
  VERSION=$VERSION npm run dist

  # publish theme
  # 进入 packages/theme-chalk 目录，更新 package.json 中的版本号，并发布到 npm。
  # 如果版本号包含 "beta"，则使用 --tag beta 发布，否则直接发布
  echo "Releasing theme-chalk $VERSION ..."
  cd packages/theme-chalk
  npm version $VERSION --message "[release] $VERSION"
  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
  cd ../..

  # commit
  # 将所有更改添加到 Git 暂存区，提交更改，并更新仓库中的版本号。
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  # 将 main 分支和标签推送到远程仓库 eleme，
  # 然后切换到 dev 分支，并将 main 分支的更改变基到 dev，最后将 dev 分支推送到远程仓库。
  git push eleme main
  git push eleme refs/tags/v$VERSION
  git checkout dev
  git rebase main
  git push eleme dev
  # 再次检查版本号是否包含 "beta"，如果是则使用 --tag beta 发布，否则直接发布。
  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi
