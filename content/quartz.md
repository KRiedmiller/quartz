---
title: Making quartz my own
tags:
  - evergreen
---
This web page is build using [quartz](https://quartz.jzhao.xyz/).

# Modifications

asdfasdfasdf

# Automatic building

Quartz is served from a host running docker. The compose file below creates a container that checks for file changes and new files, and then starts the build process with quartz build.

```yml
version: "3"
services:
  quartz:
    # check for new version: https://fleet.linuxserver.io/image?name=lsiobase/alpine
    image: lsiobase/alpine:3.19-version-8d9c604f
    container_name: quartz
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Berlin
      - DOCKER_MODS=linuxserver/mods:universal-package-install
      - INSTALL_PACKAGES=bash|nodejs|npm|git|entr
      - ENTR_INOTIFY_WORKAROUND=False
    command: bash -c 'cd quartz; while sleep 1; do find /quartz/content/ -name "*.md" | entr -snd "sleep 20; npx quartz build"; done'
    volumes:
      - /mnt/appdata/quartz:/quartz:z
```



# Todo
- Make fork

