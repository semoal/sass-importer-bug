# sass monorepo ~ not working

Steps to reproduce

1. Clone repo
2. install packages via `yarn`
3. run `yarn test`

## Expected outcome

Running `yarn test` prints `SUCCESS`.

## Actual outcome

Sass says:
```sh
(node:88871) UnhandledPromiseRejectionWarning: Error: Can't find stylesheet to import.
  ╷
1 │ @import "~@project/css/index.scss";
  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  src/index.scss 1:9  root stylesheet
```
