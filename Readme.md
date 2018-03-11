# Docker + Puppeteer + Jest

Based on the article available at [end-end-tests-dont-suck-puppeteer](https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/) and here [User Interface Testing with Jest and Puppeteer](https://www.valentinog.com/blog/ui-testing-jest-puppetteer/).

## Usage
**Pull Image**
```
docker pull davidjeddy/docker_puppeteer_react
```

**Run Puppeteer via Jest Test Suite**
```
docker run -t -v $(pwd):/app --name dpr --rm davidjeddy/docker_puppeteer_react
```

Bonus: Execute via `./run.sh`.

**With docker-compose.yml**
 - See ./docker-compose.yml

The current directory is mounted into the container at `/app`.

## Extras:
Build Image
```
docker build .
```
