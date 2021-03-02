const limitFunctionCallCount = (func, n) => {
  let times = 0;
  return function fn(...args) {
    if (times < n) {
      times += 1;
      return func.apply(this, args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
