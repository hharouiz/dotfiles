#!/usr/bin/env bash
# Requires: imagemagick, slop, mpv, tesseract, xclip, sound-theme-freedesktop
slop=$(slop -b 1 -c 1,0,1 -f "%g") || exit 1
read -r G < <(echo $slop)
import -window root -crop $G /tmp/tesseract.png &&
tesseract -l "fra+eng" /tmp/tesseract.png - | xclip -selection clipboard &&
mpv --vid=no /usr/share/sounds/freedesktop/stereo/camera-shutter.oga &>/dev/null
