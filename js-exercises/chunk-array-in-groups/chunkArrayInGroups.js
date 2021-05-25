function chunkArrayInGroups(array, chunkSize) {
  if (chunkSize === 0) return array;
  return new Array(Math.ceil(array.length / chunkSize))
    .fill()
    .map((el, index) => array.slice(index * chunkSize, (index * chunkSize) + chunkSize));
}

export {
  chunkArrayInGroups,
};
