// You can change the `args`
function bind(fn, obj) {
  return function func(x) {
    return fn.call(obj, x);
  };
}

module.exports = { bind };
