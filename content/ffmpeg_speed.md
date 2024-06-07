---
title: Change video speed
tags:
  - seedling
  - video
  - snippets
  - ffmpeg
---
Using `setpts`:
```bash
ffmpeg -i abc%2d.ppm -vcodec libx264 -crf 20 -filter:v 'setpts=3*PTS' output.mp4
```