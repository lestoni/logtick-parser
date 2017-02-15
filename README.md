# logtick parser

> Parse a `git log -1 -p --stat --pretty=fuller`

## Install

```
  npm install logtick-parser --save
```

## Usage

Sample log ->`./log.txt`

```js
  const logtickParser = require('logtick-parser');

  let tokens = logtickParser(gitlog);
```

```
  $ #Run Example to see output
  $ node test.js
```

## License

MIT
