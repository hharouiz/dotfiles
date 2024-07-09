#! /bin/bash
# Created   : Mon 10 Mar 2014 02:19:51 AM EDT
# Modified  : Mon 01 Feb 2021 03:02:58 PM EST
# Author    : GI <a@b.c>, where a='gi1242+sh', b='gmail', c='com'
#
# Zathura + synctex forward search.

output="$1"
line="$2"
col="$3"
input="$4"

pidfile=$(dirname $output)/.$(basename $output).zpid
if [[ -f $pidfile ]]; then
    zpid=$(<$pidfile)
else
    zpid=0
fi

fsearch_args=(--synctex-forward "$line:$col:$input" "$output")

if [[ -n "$line" && -n "$col" && -n "$output" ]]; then
    # Check if zathura is already running
    if ! zathura --synctex-pid $zpid "${fsearch_args[@]}"; then
	# Start new instance and write the PID.
	zathura "$output" &
	zpid=$!
	echo $zpid > $pidfile

	# Wait a max of 1 second for the new window to come up
	for (( i=0; i < 10; i++ )); do
	    zathura --synctex-pid $zpid "${fsearch_args[@]}" && break
	    sleep .1
	done
    elif [[ $XDG_CURRENT_DESKTOP == fvwm2 ]]; then
	# Activate window
	if pgrep -x FvwmCommandS > /dev/null; then
	    FvwmCommand "Next ('Zathura', '*$output', CurrentPage) WindowListFunc"
	else
	    echo "Start FvwmCommandS to also switch Windows"
	fi
    fi
else
    # Just view, without writing PID.
    exec zathura "$output"
fi
