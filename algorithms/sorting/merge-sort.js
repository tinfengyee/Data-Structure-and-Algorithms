const { createArray, lesserCompare } = require('../../util')

function merge(left, right) {
  const temp = [];
  let i = 0;
  let j = 0;
  while(i < left.length && j < right.length) {
    temp.push(lesserCompare(left[i], right[j]) ? left[i++] : right[j++]);
  }
  return temp.concat(i < left.length ? left.slice(i) : right.slice(j));

  // // OR
  // while(left.length && right.length) {
  //   temp.push(left[0] < right[0] ? left.shift() : right.shift());
  // }
  // while(left.length) {
  //   temp.push(left.shift());
  // }
  // while(right.length) {
  //   temp.push(right.shift());
  // }
  // return temp;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

const testArray = createArray();
console.log(mergeSort(testArray));