
Project for easy start of UI Automation test with WebdriverIO and TypeScript

## Features

+ Use Page Object Model for managing your test cases
+ [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) for testing
+ Interactive report with [Allure](https://webdriver.io/docs/allure-reporter.html)

## Why using TypeScript

With [TypeScript](https://en.wikipedia.org/wiki/TypeScript), it is possible to use existing JavaScript code, incorporate popular JavaScript libraries, and call TypeScript-generated code from other JavaScript. Type declarations for these libraries are provided with the source code.

## Getting Started

```
yarn install
```

for first run:

```
yarn report-init
```

## Running Tests

Run all tests. Mocha will look for test folder. If you need to use another folder, please specify it in package.json file.

```
yarn test
```

For development test, you can comment the --headless option in the wdio.conf.js for directly openning the chrome browser.

In order to run one suite test only, you can use:

```sh
yarn dev path-to-test-file
```

## Reports

To run the tests and then generate and show he test reportas a HTML webpage on a new window tab.
```
yarn report
```

For copy history data and for trends
/f - display the full path and file name of both the source and destination files being copied
/i - force xcopy to assume that destination is a directory
/y - owerwrite existed files
```
yarn report:history
```

For showing the report only:

```
yarn run-report
```

## Rerferences

[WebdriverIO API](http://webdriver.io/api/)
