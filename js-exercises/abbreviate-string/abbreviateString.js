// eslint-disable-next-line consistent-return
function abbreviateString(str) {
  const strSplitArr = str.split(' ');
  if (strSplitArr.length > 1) return `${strSplitArr[0]} ${strSplitArr[strSplitArr.length - 1].charAt(0).toUpperCase()}.`;
  return strSplitArr[0];
}

export { abbreviateString };
