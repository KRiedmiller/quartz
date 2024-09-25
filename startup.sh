#!/bin/sh

export HOME=/quartz
cd /quartz
git config --global url."https://${GIT_TOKEN}:@github.com/".insteadOf "https://github.com/"
while sleep 1; do
  find /quartz/content/ -name "*.md" | entr -snd "sleep 20; npx quartz build"
  done