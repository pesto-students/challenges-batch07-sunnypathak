const limitFunctionCallCount = (func, n) => {
  let result;
  let times = n;
  return function fn(...args) {
    if (times > 1) {
      result = func.apply(this, args);
    } else if (times <= 1) result = null;
    times -= 1;
    return result;
  };
};

export {
  limitFunctionCallCount,
};
