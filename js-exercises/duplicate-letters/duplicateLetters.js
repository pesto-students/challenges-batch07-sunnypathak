/* eslint-disable eqeqeq */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
function duplicateLetters(...args) {
  let max = -1;
  for (let j = 0; j < args.length; j++) {
    for (let i = 0; i < args[j].length; i++) {
      const ch = args[j].charAt(i);
      const count = args[j].split(ch).length - 1;
      if (count > max) max = count;
    }
  }
  if (max == 1) return false;
  return max;
}

export {
  duplicateLetters,
};
