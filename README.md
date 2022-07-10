# demo-build

## Prerequisite

- Node: up v14
- Pnpm

## Installation

`pnpm install`

## Development

`npm start`

## Test

`npm test`

## Build

`npm run build`

## How to test git hooks

1. Change any code as you like
2. Run `git add .`
3. Run `git commit -m "change code"`, then it would run git hook - `pre-commit`. If it some tasks fail, it would 
   show some errors in your terminal and your code won't commit.
4. Run `git push`, it would run git hook - `pre-push` which means it runs some tasks step by step. 
   If one of tasks fails, it won't push your code.
