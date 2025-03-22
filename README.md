# Techspert QA interview test

This repository contains:
1. A simple mock application with a variety of components for use as a test automation playground
2. A basic, playwright based, test automation framework with unimplemented test scenarios

## Getting started

> **Note**: these instructions assume you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed

First install the packages and playwright dependencies:

```
npm i
npx playwright install
```

Build and serve the application:

```
npm run serve
```

The current (unimplemented) tests can be run using:

```
npx playwright test
```

## The interview task

The `/tests` folder contains 5 unimplemented test scenarios, in each case, the test name gives an indication of the application functionality the test scenario is expected to assess. Each test visits the relevant page in the application, but then performs no additional actions.

Your task is to write the test logic that assesses the application functionality, as indicated by the test name. There will be time within the interview process to review and discuss your solutions and any challenges you encountered in the process. You are welcome to create a pull request against the repository if you wish to share your solutions prior to the interview, but this is not required.

### Automation tool

This repository has [playwright](https://playwright.dev/) installed as the default test automation tool. You may install and use an alternative test automation tool, depending on your level of familiarity with different tools.

### Application testability

You may make changes to the application code if you feel they are necessary to improve the testability of the application. Please do not make changes to the application functionality.