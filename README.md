
__Steps to reproduce a bug (?) in Rollup__


Using rollup 1.19.4

1. `npm install`
2. `npm run build`
3. `node dist/yaml.min.js` => TypeError: Right-hand side of 'instanceof' is not an object



In `var Pair_1 = createCommonjsModule(function (module, exports) {`,  
there is `var _Collection = interopRequireDefault(Collection_1$1);` when `Collection_1$1` is undefined

`var Collection_1$1 = createCommonjsModule(function (module, exports) {...` is defined later.
