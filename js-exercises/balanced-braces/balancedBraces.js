function balancedBraces(str) {
  const bracketsMap = new Map();
  bracketsMap.set(']', '[');
  bracketsMap.set('}', '{');
  bracketsMap.set(')', '(');

  const closingBrackets = [...bracketsMap.keys()];
  const openingBrackets = [...bracketsMap.values()];

  const temp = [];
  const len = str.length;

  let ch;

  for (let i = 0; i < len; i += 1) {
    ch = str[i];

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
