#
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

# The location where the Dropbox directory is installed
export BASE="$HOME"

# Aliases
#alias st='st -f "Liberation Mono:size=25"'


# Locales
export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# Install path
export INSTALLDIR=$BASE/Dropbox/Install

# This file
export BASHRC=$INSTALLDIR/.bashrc

# Compilers
export FC=gfortran
export CC=gcc

# Default configuration
export MYCONFIG=$INSTALLDIR/config
export XDG_CONFIG_HOME=$HOME/.config

# ==============================================================================
# XORG
# ==============================================================================
#if [ -z "${DISPLAY}" ] && [ "${XDG_VTNR}" -eq 1 ]; then
#  exec startx
#fi

# ==============================================================================
# SUSYScan
# ==============================================================================
export PACKAGES=$BASE/Dropbox/packages
export TARS=$BASE/Dropbox/tars
export SUSYScan=$BASE/Dropbox/SUSYScan
export PYTHONPATH="$SUSYScan:$PYTHONPATH"
export PYTHONPATH="$SUSYScan/helpers:$PYTHONPATH"
export PYTHONPATH="$SUSYScan/pysusy:$PYTHONPATH"
export PYTHONPATH="$SUSYScan/pyparse:$PYTHONPATH"
export PYTHONPATH="$SUSYScan/pydraft:$PYTHONPATH"

# ==============================================================================
# Vim
# ==============================================================================
export MYVIM=$INSTALLDIR/vim
export VIMCONFIG=~/.vim
export VIMDATA=~/.vim
# fuzzy finder
export PATH=$PATH:$MYVIM/pack/bundle/start/fzf/bin

# ==============================================================================
# Neovim
# ==============================================================================
# export VIMCONFIG=~/.config/nvim
# export VIMDATA=~/.local/share/nvim
# Use Neovim as "preferred editor"
# export VISUAL=nvim
# Use Neovim instead of Vim or Vi
# alias vim=nvim
# alias vi=nvim

# ==============================================================================
# TeX
# ==============================================================================
export MYTEXMF=$INSTALLDIR/texmf
#export TEXMFHOME=$HOME/texmf
export LYDEX=$BASE/Dropbox/Jobs/Others/AmineSouktani/LyDex

# ==============================================================================
# WM
# ==============================================================================
export PANEL_FIFO=/tmp/panel-fifo
export PATH=$PATH:$XDG_CONFIG_HOME/bspwm/panel

# ==============================================================================
# Zathura
# ==============================================================================
export PATH=$PATH:$MYCONFIG/zathura/gautamiyer

# ==============================================================================
# Archlinux
# ==============================================================================
export MYBUILDS=/home/x/Dropbox/LightTuto/ArchLiux/Doing/Builds
export MYAUR=/home/x/Dropbox/LightTuto/ArchLiux/Doing/AUR

# WM 
[[ $(fgconsole 2>/dev/null) == 1 ]] && exec startx -- vt1

# CONDA
# export PATH=$PATH:~/.local/bin

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/x/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/home/x/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/home/x/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/home/x/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

