#!/bin/bash
clear
docker run -t -v $(pwd):/app --name dpr --rm davidjeddy/docker_puppeteer_jest