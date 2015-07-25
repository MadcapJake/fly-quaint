<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [Quaint](https://github.com/breuleux/eg-quaint) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Currently, there is no documentation available.  However, you can get a feel for what Quaint is capable of by trying it [here](http://breuleux.net/tryquaint/).

This plugin takes an optional object of options :dizzy_face: which are passed to the compiler. There is one option that is dealt with directly by the plugin and that's the `format` that you'd like the result to be in.  It can be `html`, `enode`, `text` and (currently not working) `dom`.  `format` defaults to `html` and logs a message to the user stating that it is using the default (may drop or change this).

### Install

```a
npm install -D fly-quaint
```

### Example

#### JavaScript
```js
export default function* () {
  yield this.clear("dist")
  yield this
    .source("src/**/*.q")
    .quaint({ format: "html" }) // this is the default
    .concat("result.html")
    .target("dist")
}
```

#### Earl-Grey
```earl-grey
provide: default
default = *->
   yield this.clear(.dist)
   yield chain this:
      @source: "src/*.q"
      @quaint: { format = .html } ;; this is the default
      @concat: "result.html"
      @target: .dist
```

# License

[MIT][mit] © [Jake Russo][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/MadcapJake
[contributors]: https://github.com/MadcapJake/fly-quaint/graphs/contributors
[releases]:     https://github.com/MadcapJake/fly-quaint/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-quaint
[npm-ver-link]: https://img.shields.io/npm/v/fly-quaint.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-quaint.svg?style=flat-square
[travis-link]:  https://travis-ci.org/MadcapJake/fly-quaint
[travis-badge]: http://img.shields.io/travis/MadcapJake/fly-quaint.svg?style=flat-square
