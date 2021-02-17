function balancedBraces(str) {
  const bracketsMap = new Map();
  bracketsMap.set(']', '[');
  bracketsMap.set('}', '{');
  bracketsMap.set(')', '(');

  const closingBrackets = [...bracketsMap.keys()];
  const openingBrackets = [...bracketsMap.values()];

  const temp = [];

  for (const ch of str) {
    if (openingBrackets.indexOf(ch) > -1) {
      temp.push(ch);
    } else if (closingBrackets.indexOf(ch) > -1) {
      if (temp.length === 0 || (temp.pop() !== bracketsMap.get(ch))) {
        return false;
      }
    }
  }

  return (temp.length === 0);
}

export {
  balancedBraces,
};
