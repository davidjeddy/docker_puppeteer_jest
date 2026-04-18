# Docker + Puppeteer + Jest

Browser testing using Chrome, no need to install stuff on your machine, it's in the image! Just make your test files and go.

Based on the article available at [end-end-tests-dont-suck-puppeteer](https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/) and here [User Interface Testing with Jest and Puppeteer](https://www.valentinog.com/blog/ui-testing-jest-puppetteer/).

## Assumptions

 - This is of acceptance/end-to-end/user testing. Not functional or unit; it may work, but is not the main goal.
 - Puppeteer expect test files to be named in the format *.spec.js
 - You have a Jest test suite already, ([an example suite is available from the source repository](git clone https://github.com/davidjeddy/docker_puppeteer_jest) if needed for examples).
 - Understand `docker run ... --rm` executes a task then terminates.

## Usage
Pull Image from hub.docker.com
```
docker pull davidjeddy/docker_puppeteer_jest
```

Run the image
```
docker run -t -v $(pwd)/DIR/PATH/TO/YOUR/JEST/TESTS:/app/tests --name dpj --rm davidjeddy/docker_puppeteer_jest
```

That is it! :bacon:

You should now have test output results in the CLI output, as well as screen captures saved to $(pwd)/DIR/PATH/TO/YOUR/JEST/TESTS/_output/ .

## Extra

If you get the  error `Async callback was not invoked withing the 5000ms timout specified by jest.setTimeout`, refer to the [Jest documention](https://facebook.github.io/jest/docs/en/troubleshooting.html) for how to adjust timeout as needed.

## Troubleshooting

The Google Chrome teams offers some assistance when using Puppetter over on thier [GitHub project page](https://github.com/GoogleChrome/puppeteer).
