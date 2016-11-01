#!/usr/bin/env node

var maq = require('../');
var argv = require('minimist')(process.argv.slice(2));
var purified = { };
for (var name in argv) {
  var count = parseInt(argv[name]);
  if (count == NaN || count < 0)
    console.error(`'${count}' is not positive integer. "${name}" is skipped.`);
  else
    purified[name] = count;
}
for (var i of maq(purified))
  console.log(i);
