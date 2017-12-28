# project-euler

[![Build Status](https://travis-ci.org/bkaid/project-euler.svg?branch=master)](https://travis-ci.org/bkaid/project-euler) [![Dependency Status](https://david-dm.org/bkaid/project-euler.svg)](https://david-dm.org/bkaid/project-euler)
[![devDependency Status](https://david-dm.org/bkaid/project-euler/dev-status.svg)](https://david-dm.org/bkaid/project-euler?type=dev)

[![Project Euler](https://projecteuler.net/profile/bkaid.png)](https://projecteuler.net)

Project Euler problems completed in Python and JavaScript (ES6, Node) and unit tested with PyTest and Jasmine.

## Prerequisites
* [Node.js](https://nodejs.org/)
* [Python 3](https://www.python.org/downloads/)

OR

* [Docker](https://www.docker.com/)

### Install dependencies
```sh
npm install
pip3 install -r requirements.txt
```

### Building Docker image
```sh
docker build -t bkaid/project-euler .
```

### Run unit tests
```sh
docker run -it --rm bkaid/project-euler npm test

PYTHONPATH=. pytest
```

### Run project euler problem
```sh
docker run -it --rm bkaid/project-euler node project-euler 0001

python3 problems/problem-0000/problem_0000.py
```
