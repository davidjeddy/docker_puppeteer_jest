FROM geekykaran/headless-chrome-node-docker:latest
MAINTAINER David J Eddy <me@davidjeddy.com>
COPY ./ /app
WORKDIR /app
#RUN npm i npm@4 -g
#RUN mkdir /npm && cd /npm && npm config set prefix "/npm" && cd ~/ && export 'PATH=/npm:${PATH}'
RUN npm install -g babel-core babel-jest babel-preset-env
RUN npm install -g jest-cli
RUN npm install -g jest puppeteer --unsafe-perm=true
EXPOSE 9222
