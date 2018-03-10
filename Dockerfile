FROM geekykaran/headless-chrome-node-docker:latest
MAINTAINER David J Eddy <me@davidjeddy.com>
RUN npm install -g babel-core babel-jest babel-preset-env
RUN npm install -g jest puppeteer --unsafe-perm=true
RUN export PATH=/usr/local/lib/node_modules:$PATH
WORKDIR /app
CMD ["tail", "-F", "/dev/null"]
