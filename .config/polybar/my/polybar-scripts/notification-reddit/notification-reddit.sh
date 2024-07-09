#!/bin/bash

URL="https://www.reddit.com/message/unread/.json?feed=c128793da51f9a313f17c1d932f16e05eaa3b706&user=hharouiz"
USERAGENT="polybar-scripts/notification-reddit:v1.0 u/hharouiz"

notifications=$(curl -sf --user-agent "$USERAGENT" "$URL" | jq '.["data"]["children"] | length')

if [ -n "$notifications" ] && [ "$notifications" -gt 0 ]; then
    echo "#1 $notifications"
else
    echo "#2"
fi
