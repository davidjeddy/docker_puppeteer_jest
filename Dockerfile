FROM geekykaran/headless-chrome-node-docker:latest
MAINTAINER David J Eddy <me@davidjeddy.com>
RUN npm install -g babel-core babel-jest babel-preset-env jest puppeteer --unsafe-perm=true
RUN export PATH=/usr/local/lib/node_modules:$PATH
WORKDIR /app
CMD ["npm", "test"]
