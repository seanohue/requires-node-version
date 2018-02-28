This is a tool to make logging a Node version mismatch super simple.

Here is the API:
```javascript
const requires = require('./index.js');

requires('9.9.9');
// => This program requires Node 9.9.9 or higher.
// => You are currently using Node v8.9.4.
// => *exits process*

requires.between('1.2.3', '6.6.6', 'Ham');
// => Ham is deprecated after Node 6.6.6 or lower.
// => You are currently using Node v8.9.4.
// => *exits process*
```

Enjoy.