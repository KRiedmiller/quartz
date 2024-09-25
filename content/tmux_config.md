---
title: tmux configuration
date: 2024-07-01
tags:
  - seedling
  - snippets
---
Replace `xterm-256color` with the output of `echo $TERM` if colors do not work in tmux.

```
# List of plugins
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-pain-control'
set -g @plugin 'seebi/tmux-colors-solarized'

# set -g @resurrect-processes '"python3.10 -m mkdocs serve"'
set -g @colors-solarized '256'
set-option -a terminal-features 'xterm-256color:RGB'

# Other examples:
# set -g @plugin 'github_username/plugin_name'
# set -g @plugin 'git@github.com:user/plugin'
# set -g @plugin 'git@bitbucket.com:user/plugin'

set -g prefix C-b

unbind -T copy-mode-vi Space; #Default for begin-selection
unbind -T copy-mode-vi Enter; #Default for copy-selection

bind -T copy-mode-vi v send-keys -X begin-selection
bind -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "xclip -i -f -selection primary | xclip -i -selection clipboard"


# Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
run '~/.tmux/plugins/tpm/tpm'

```