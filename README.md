alphabetize
===========

[![browser support](https://ci.testling.com/malantonio/alphabetize.png)](https://ci.testling.com/malantonio/alphabetize)

sort a string alphabeticallly

## usage

with node

```javascript
var alph = require('alphabetize');

console.log(alph('i am a happy string! maybe the happiest?'));
//-> 'a am happiest happy i maybe string the'
```

or from the command line

```bash
> alphabetize file.txt
##-> a file of test text
> echo "dogs vs cats" | alphabetize
##-> cats dogs vs
```

or in the browser

```html
<script src="alphabetize.js"></script>
<script>
var txt = document.getElementById('txt');
txt.textContent = alphabetize(txt.textContent);
</script>
```

## license
MIT
