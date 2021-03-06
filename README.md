# js-4-n00bs

![JS For Dummies](https://images-na.ssl-images-amazon.com/images/I/51y+YhtJz-L._SX322_BO1,204,203,200_.jpg)

## Meta

### Build Check

[![Node.js CI](https://github.com/Web-Dev-Speedrunners/js-4-n00bs/actions/workflows/node.js.yml/badge.svg)](https://github.com/Web-Dev-Speedrunners/js-4-n00bs/actions/workflows/node.js.yml)

## Quick Start

1. Install dependencies: `yarn install`

## Running a file

`yarn run file <filename>`
Example: `yarn run file src/filter.js`

## Testing

### How to run test

- Run all tests: `yarn run test`
- Run a single file: `yarn run test <filename>`

### How to test

Take a look at `src/array.test.js`

## How to Add Custom method

1. Navigate to the appropriate file in `src/Array/<filename>`
2. Modify the file to include the appropriate function

#### Example with `src/Array/filter.js`

```
Array.prototype.myFilter = function(filterFn) {
  return this.filter(filterFn)
}
```
