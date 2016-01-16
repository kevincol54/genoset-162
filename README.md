# genoset-162

This script determines if you are a CYP2C9 poor metabolizer. CYP2C9 poor metabolizers require different dosages for drugs such as tamoxifen, warfarin, fluvastin, and many nonsteroidal anti-inflammatory agents such as aspirin, ibuprofen and naproxen, as per [gs162](http://www.snpedia.com/index.php/Gs162)

*This does not increase your risk of getting cancer, however*

## Compatibility

This genoset is to be used with DNA-JSON. See [dna2json](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var poorMetabolizer = require('genoset-162');
var dna = require('./dna.json');

console.log(poorMetabolizer(dna));
// → `true` or `false`
```

## Contributions

This Project follows the StandardJS style guide.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

To Contribute:

- Clone Repo
- `npm install`
- Write Code
- Write Test(s)
- Submit Pull Request


## Author

| [![twitter/kevco54](https://gravatar.com/avatar/c3f0cac49ad7d267cb58499a86bfdd19)](https://twitter.com/kevco54 "Follow @kevco54 on Twitter") |
|---|
| [Kevin Collins](https://iamkevin.co/) |

## License

_genoset-162_ is available under the [MIT](https://mths.be/mit) license.
