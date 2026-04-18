# Puppeteer + Jest

Based on the article available at [end-end-tests-dont-suck-puppeteer](https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/) and here [User Interface Testing with Jest and Puppeteer](https://www.valentinog.com/blog/ui-testing-jest-puppetteer/).

## Container Service
Build service
```
docker pull davidjeddy/docker_puppeteer_react
docker build . -t docker_puppeteer_react:latest
```

## Usage

```
docker-compose up -d 
docker exec -it docker_puppeteer_react jest
```