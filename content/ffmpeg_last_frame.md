---
title: Extract last frame from video
tags:
  - seedling
  - video
  - snippets
  - ffmpeg
date: 2024-06-19
---
```bash
ffmpeg -sseof -3 -i input -update 1 -q:v 1 last.jpg
```