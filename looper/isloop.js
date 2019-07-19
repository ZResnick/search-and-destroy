'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let node = linkedlist.head;
  let table = {};
  while (node.next) {
    if (table[node.value]) return true;
    else {
      table[node.value] = node.value;
      node = node.next;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
