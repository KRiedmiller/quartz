---
title: Compress Video
tags:
  - seedling
  - video
  - snippets
  - ffmpeg
date: 2024-06-07
---
Lower crf -> higher quality, best between 18-24
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 20 output.mp4
```

