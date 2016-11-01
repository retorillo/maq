const Random = require('random-js');
module.exports = maq;

function maq(recipe, option) {
  option = option || { shuffle: true, };
  return (option.shuffle ? shuffle : nop)(cook(recipe));
}
function nop(arr) {
  return arr;
}
function shuffle(arr) {
  var e = Random.engines.mt19937().autoSeed();
  return Random.shuffle(e, arr);
}
function cook(recipe) {
  var arr = [];
  for (var name in recipe)
    push_range(arr, name, parseInt(recipe[name]));
  return arr;
}
function push_range(arr, value, count) {
  for (var c = 0; c < count; c++)
    arr.push(value);
}
