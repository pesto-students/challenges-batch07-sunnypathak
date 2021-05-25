const sumEvenArgs = (...args) => {
  if (args.length === 0) return 0;
  const evenElements = args.filter(num => num % 2 === 0);
  const evenElementsArrSum = evenElements.reduce((acc, el) => acc + el, 0);
  return evenElementsArrSum;
};

export { sumEvenArgs };
