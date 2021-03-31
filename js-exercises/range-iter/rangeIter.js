/* Implementation using generator function */

// function* generateSequence(start, end) {
//   for (let val = start; val <= end; val += 1) {
//     yield val;
//   }
// }

// function rangeIter(lb, ub) {
//   if (arguments.length === 0 || arguments.length === 1) {
//     throw new TypeError('Please pass the parmaeters');
//   }

//   if (typeof ub !== 'number') {
//     throw new TypeError(`${ub} is not a number`);
//   }
//   return [...generateSequence(lb, ub)];
// }

/* Implementation using iterator */
function rangeIter(lb, ub) {
  if (arguments.length === 0 || arguments.length === 1) {
    throw new TypeError('Please pass the parmaeters');
  }

  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }

  const resultArr = [];
  let from = lb;
  const to = ub;
  const obj = {
    [Symbol.iterator]() {
      return {
        next() {
          if (from <= to) {
            from += 1;
            return {
              value: from - 1,
              done: false,
            };
          }

          return {
            done: true,
          };
        },
      };
    },
  };

  for (const val of obj) {
    resultArr.push(val);
  }

  return resultArr;
}

export { rangeIter };
