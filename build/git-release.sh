# 作用：用于 Git 仓库的 shell 脚本，用于在进行某些操作之前检查工作树和远程分支的状态，
# 以确保没有未提交的更改、工作树是干净的，并且没有未同步的远程更改

# 告诉操作系统使用 /usr/bin/env 中找到的 sh 解释器来运行该脚本
#!/usr/bin/env sh

# 将当前分支切换到 dev 分支
git checkout dev

# 检查工作树是否干净。如果有未提交的更改（git status --porcelain 返回非空）
# ，则输出一条错误消息并退出脚本
if test -n "$(git status --porcelain)"; then
  echo 'Unclean working tree. Commit or stash changes first.' >&2;
  exit 128;
fi
# 尝试静默地从远程获取最新的更改。如果 git fetch 失败，则输出一条错误消息并退出脚本
if ! git fetch --quiet 2>/dev/null; then
  echo 'There was a problem fetching your branch. Run `git fetch` to see more...' >&2;
  exit 128;
fi
# 检查本地分支和远程分支是否同步。如果本地分支落后于远程分支
# （即 git rev-list --count --left-only @'{u}'...HEAD 返回非零），则输出一条错误消息并退出脚本
if test "0" != "$(git rev-list --count --left-only @'{u}'...HEAD)"; then
  echo 'Remote history differ. Please pull changes.' >&2;
  exit 128;
fi
# 如果工作树干净且与远程分支同步，则输出一条消息表明没有冲突
echo 'No conflicts.' >&2;
