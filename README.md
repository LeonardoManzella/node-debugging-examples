# Node debugging examples

## Introduction

This application is made with the objective that you can test the debugging tools as stated on my medium post.

You can go to the following endpoints in your browser, each of these has a bug that you must solve to see the "Success Message", try to solve them using the tool indicated in the url:
- `http://localhost:3000/examples/status` (Check Backend Status)
- `http://localhost:3000/examples/chrome-dev-tools`
- `http://localhost:3000/examples/ndb`
- `http://localhost:3000/examples/asynchronous-error`


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

## Run the App

To run in standard mode use:
```sh
$ npm run dev
```

To run using NDB:
```sh
$ npm run debug
```

