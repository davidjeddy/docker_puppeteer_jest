FROM geekykaran/headless-chrome-node-docker:latest

MAINTAINER David J Eddy <me@davidjeddy.com>

COPY ./ /app

WORKDIR /app

RUN npm install

RUN npm install babel-core babel-jest babel-preset-env

RUN npm install jest-cli --save

RUN npm install jest puppeteer faker --save-dev

EXPOSE 9222

CMD ["npm", "test"]

