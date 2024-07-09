#!/bin/bash

# Terminate already running bar instances
killall -q polybar
# If all your bars have ipc enabled, you can also use
# polybar-msg cmd quit

# Launch polybar, using default config location ~/.config/polybar/config
# polybar example 2>&1 | tee -a /tmp/polybar.log & disown

# Launch polybar, using my configuration
polybar --config=$XDG_CONFIG_HOME/polybar/config.ini main &

echo "polybar launched..."
