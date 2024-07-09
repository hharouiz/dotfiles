#!/bin/bash

# Launch picom, using default config location ~/.config/picom/picom.conf
# picom &

# Launch picom, using my configuration
picom --config=$XDG_CONFIG_HOME/picom/myconfig &

echo "picom launched..."
