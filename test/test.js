const maq = require('../');
const should = require('should');

function verify_shuffle(recipe, result) {
  for (var name in recipe)
    should({ name:name, count: parseInt(recipe[name]) })
      .be.eql({ name: name, count: result.filter(n => { return name === n }).length });
}
function verify_unshuffle(recipe, result) {
  var i = 0;
  for (var name in recipe) {
    var count = parseInt(recipe[name]);
    for (var c = 0; c < count; c++, i++) {
      should({ index: i, value: name })
        .be.eql({ index: i, value: result[i] })
    }
  }
}
function do_maq(shuffle, recipe) {
  (shuffle ? verify_shuffle : verify_unshuffle)(recipe,
    maq(recipe, !shuffle ? { shuffle: false } : undefined));
}

const empty_recipe = { foo: 0, bar: 0, baz: 0 };
const nonempty_recipe = { foo: 0, bar: 8, baz: 16 };

var tests = {
  "maq" : {
    "empty": () => { do_maq(true, empty_recipe); },
    "non-empty": () => { do_maq(true, nonempty_recipe); },
    "unshuffled empty": () => { do_maq(false, empty_recipe); },
    "unshuffled non-empty": () => { do_maq(false, nonempty_recipe); },
  },
};

for (var d in tests)
  describe (d, () => {
    for (var i in tests[d])
      it (i, tests[d][i]);
  });

