---
title: Video encoding for dump players
tags:
  - seedling
  - video
  - snippets
  - ffmpeg
date: 2024-06-19
---
The installed codecs in Fedora 40 aren't capable of handling the h.264 profile high 4:4:4.
Setting the format fixes the issue.

```bash
ffmpeg -i input -vcodec libx264 -vf format=yuv420p output.mp4
```