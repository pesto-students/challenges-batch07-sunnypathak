function chunkArrayInGroups(array, chunkSize) {
  if (chunkSize === 0) return array;
  return new Array(Math.ceil(array.length / chunkSize))
    .fill()
    .map(() => array.splice(0, chunkSize));
}

export {
  chunkArrayInGroups,
};
