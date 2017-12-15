# project-euler

[![Build Status](https://travis-ci.org/bkaid/project-euler.svg?branch=master)](https://travis-ci.org/bkaid/project-euler) [![Dependency Status](https://david-dm.org/bkaid/project-euler.svg)](https://david-dm.org/bkaid/project-euler)
[![devDependency Status](https://david-dm.org/bkaid/project-euler/dev-status.svg)](https://david-dm.org/bkaid/project-euler?type=dev)

[![Project Euler](https://projecteuler.net/profile/bkaid.png)](https://projecteuler.net)

Project Euler problems completed in JavaScript (ES6, Node) and unit tested with Jasmine.

## Prerequisites
* [Docker](https://www.docker.com/)

### Building Docker image
```sh
docker build -t bkaid/project-euler .
```

### Run unit tests
```sh
docker run -it --rm bkaid/project-euler npm test
```

### Run project euler problem
```sh
docker run -it --rm bkaid/project-euler node project-euler 0001
```
