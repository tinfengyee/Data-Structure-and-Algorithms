const { createArray, swap, biggerCompare } = require('./util')

function selectSort(array) {
  let minIndex;
  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (biggerCompare(array[minIndex], array[j])) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, minIndex, i)
    }
  }
  return array;
}

console.log(selectSort(createArray()));