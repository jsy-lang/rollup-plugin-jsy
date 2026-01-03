# rollup-plugin-jsy
Configuration for using [JSY](https://github.com/jsy-lang/jsy-lang-docs#readme) in [RollupJS](https://rollupjs.org).

## Quick Start

```bash
$ npm init jsy basic .
$ sh ./finish-init.sh
$ rm ./finish-init.sh
```

## Manual Start

```bash
# optional; could also use `npm init .`
$ echo '{"private": true}' > package.json

# install devDependencies for JSY and RollupJS
$ npm install -D rollup rollup-plugin-jsy
```

### Basic `rollup.config.js` Configuration:

```javascript
import rpi_jsy from 'rollup-plugin-jsy'

const _cfg = {
  plugins: [ rpi_jsy() ],
  external: [],
}

export default [
  ...add_jsy('index'),
]

function * add_jsy( src_name, opt={} ) {
  const input = `code/${ src_name }${ opt.ext || '.jsy' }`
  yield { ..._cfg, input, output: [
      { file: `esm/${ src_name }.js`, format: 'es', sourcemap: true },
      //{ file: `esm/${ src_name }.js`, format: 'es', sourcemap: true },
      //{ file: `umd/${ src_name }.js`, format: 'umd', name: opt.name || src_name, sourcemap: true },
    ].filter( Boolean )
  }
}
```

#### Add `files` and `scripts` to `package.json` :

```json
{
  "files": [ "cjs/", "esm/", "umd/" ],
  "scripts": {
    "clean": "rm -rf ./cjs/* ./esm/* ./umd/*",
    "build": "rollup --config",
    "watch": "npm -s run build -- --watch",
    "pretest": "npm -s run build",
    "test": "true"
  }
}
```

## License

[MIT](LICENSE)
