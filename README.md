coinflip.js
===========

Randomly return `true` or `false`.

To use in Node/Browserify/Webpack/CommonJS:

```html
var coinflip = require('coinflip');

if (coinflip()) {
  console.log('Heads!');
} else {
  console.log('Tails!');
}
</script>
```

To use in the browser:

```html
<script src="coinflip.js"></script>
<script>
if (coinflip()) {
  console.log('Heads!');
} else {
  console.log('Tails!');
}
</script>
```

Enjoy!
