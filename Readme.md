# Puppeteer + Jest

Based on the article available at [end-end-tests-dont-suck-puppeteer](https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/) and here [User Interface Testing with Jest and Puppeteer](https://www.valentinog.com/blog/ui-testing-jest-puppetteer/).

## Container Service

**Start Service**
```
docker-compose up -d 
```

**Run Test Suite/s**
```
docker exec -it docker_puppeteer_react jest
```

The current directory is mounted into the container at `/app`.

## Extras:
Build Image
```
docker build .
```