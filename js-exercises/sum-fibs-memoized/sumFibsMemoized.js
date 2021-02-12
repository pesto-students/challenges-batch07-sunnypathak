function sumFibs(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 0;
  let sum = n1 + n2;
  while (nextTerm < num) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    if (nextTerm % 2 !== 0 && nextTerm < num) { sum += nextTerm; }
  }
  return sum;
}

function cacheFunction(fn) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}

export { sumFibs, cacheFunction };
