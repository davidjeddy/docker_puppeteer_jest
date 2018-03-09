# Puppeteer + Jest

Based on the article available at [end-end-tests-dont-suck-puppeteer](https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/) and here [User Interface Testing with Jest and Puppeteer](https://www.valentinog.com/blog/ui-testing-jest-puppetteer/).

## Container Service
```
docker pull davidjeddy/docker_react_puppeteer
docker build . -t docker_react_puppeteer:latest
docker run -d --name docker_react_puppeteer docker_react_puppeteer
```

 ... then use `docker logs -f docker_react_puppeteer` to see it working. 

## Host Machine
### Install
```
git@github.com:davidjeddy/ui-testing-jest-puppetteer.git
npm install
```

### Setup
```
npm install && npm install babel-core babel-jest babel-preset-env jest puppeteer faker --save-dev
```

### Usage
```
npm test
```
