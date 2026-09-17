#\per
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
#export TEXMFHOME=$HOME/texmf
export PATH=$PATH:/usr/local/texlive/2024/bin/x86_64-linux
export MANPATH=/usr/local/texlive/2024/texmf-dist/doc/man
export INFOPATH=/usr/local/texlive/2024/texmf-dist/doc/info
export LYDEX=$BASE/Dropbox/Jobs/Others/AmineSouktani/LyDex
export TEXMFDIST=/usr/share/texmf-dist # files of the original distribution
export TEXMFLOCAL=/usr/local/share/texmf:/usr/share/texmf # administrators for system-wide installation of additional or updated macros, fonts, etc.
export TEXMFSYSVAR=/var/lib/texmf # updmap and fmtutil (user mode) to store (cached) runtime data
export TEXMFSYSCONFIG=/etc/texmf # updmap and fmtutil (user mode) to store modified configuration data
export TEXMFHOME=~/texmf # users for their own individual installations of additional or updated macros, fonts, etc.
#export TEXMFVAR=~/.texlive/texmf-var # updmap and fmtutil (sys mode) to store (cached) runtime data
#export TEXMFCONFIG=~/.texlive/texmf-config # updmap and fmtutil (sys mode) to store modified configuration data
export TEXMFCACHE=$TEXMFSYSVAR;$TEXMFVAR # ConTeXt MkIV and LuaLaTeX to store (cached) runtime data

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
# export PATH="$HOME/anaconda3/bin:$PATH"  # commented out by conda initialize
export CONDAENVSDIR=$HOME/Dropbox/Install/conda/envs
# export PATH=$PATH:~/.local/bin

#
alias dotfiles='/usr/bin/git --git-dir="$HOME/.dotfiles/" --work-tree="$HOME"'

export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib/

# tesseract data
export TESSDATA_PREFIX="/home/$USER/.tessdata"

# udevadm aliases
alias udatt='udevadm info --attribute-walk'
alias udall='udevadm info --query=all'
alias udrel='sudo udevadm control --reload-rules && sudo udevadm trigger'

# CMEMS
export PYTHONPATH="/home/x/Dropbox/Jobs/AmineSouktani/PhD/CMEMS:$PYTHONPATH"

export GOPATH=$HOME/.go
export PATH=$PATH:$GOPATH/bin

# snap
export PATH=$PATH:/var/lib/snapd/snap/bin

# Troubleshooting: JDownloader2 plain white window on BSPWM
# https://www.reddit.com/r/archlinux/comments/lvx1m1/how_to_fix_jdownloader2_plain_white_window_on/
# https://wiki.archlinux.org/title/Bspwm#Problems_with_Java_applications
# sudo pacman -S wmname
export _JAVA_AWT_WM_NONREPARENTING=1

TMPDIR=$HOME/tmp

#export LD_LIBRARY_PATH=/usr/lib:$LD_LIBRARY_PATH

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

alias hdmi="xrandr --output eDP-1 --mode 1920x1080 --output HDMI-2 --mode 1920x1080 --same-as eDP-1 --rate 60"
