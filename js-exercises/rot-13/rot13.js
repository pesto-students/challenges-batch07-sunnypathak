function rot13(args) {
  let result = '';
  for (const char of args) {
    if (char >= 'A' && char < 'N') {
      result += String.fromCharCode(char.charCodeAt(0) + 13);
    } else if (char >= 'N' && char <= 'Z') {
      result += String.fromCharCode(char.charCodeAt(0) - 13);
    } else {
      result += char;
    }
  }
  return (result);
}

export {
  rot13,
};
