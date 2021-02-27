function debounce(fn, timeInMs) {
  let timer;
  return function func(...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => { fn.apply(context, args); }, timeInMs);
  };
}

export { debounce };
