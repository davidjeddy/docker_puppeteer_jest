FROM geekykaran/headless-chrome-node-docker:latest

RUN apt-get update -y && apt-get install -y procps

COPY ./ /app

WORKDIR /app

RUN npm install && npm i jest puppeteer faker --save-dev && npm i babel-core babel-jest babel-preset-env --save-dev

CMD ["sh", "./entry_point.sh"]
