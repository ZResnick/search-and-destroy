'use strict';

// Complete this algo
const minJumps = arr => {
  let counter = 1;
  if (arr.length === 1) return counter;
  let table = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] + i >= arr.length) {
      table.push(i);
    }
  }
  console.log(
    'array>>>>>>>>>>>>>>',
    arr.slice(0, table.pop() + 1),
    'counter>>>>>>>>>>>>>>>',
    counter
  );

  return (counter += minJumps(arr.slice(0, table.pop())));
};

module.exports = minJumps;
