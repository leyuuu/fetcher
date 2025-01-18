# reset commits
- git config --global alias.squash-all '!f(){ git reset $(git commit-tree HEAD^{tree} "$@");};f'
- git squash-all -m "a brand new start"