# Node debugging examples

## Introduction

This application is made with the objective that you can test the debugging tools as stated on my medium post.

You can go to the following endpoints in your browser, each of these has a bug that you must solve to see the "Success Message", try to solve them using the tool indicated for each:
- `http://localhost:3000/examples/status` (Check backend status first)
- `http://localhost:3000/examples/chrome-dev-tools` (Use Chrome Dev Tools to find the error location, then fix it modifying the endpoint file)
- `http://localhost:3000/examples/ndb` (Use NDB to not only find the bug but also fix it without leaving NDB, tip: use the "Pause on exceptions" option)
- `http://localhost:3000/examples/asynchronous-error` (see the console log to find the file)

Note that by default we use a winston logger for logs (see the terminal).

## Setup

### Requirements

1. Install [Node.js](https://nodejs.org)

### Installing dependencies

Go to project root folder:

```sh
$ cd node-debugging-examples
```
Then execute

```sh
$ npm install
```

## Run the Examples

To run in standard mode use:
```sh
$ npm run dev
```

To run using NDB:
```sh
$ npm run debug
```

