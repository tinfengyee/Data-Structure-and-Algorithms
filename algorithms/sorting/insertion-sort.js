const { biggerCompare, swap, createArray } = require('../../util')

function insertionSort (array) {
  for (let i = 1; i < array.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (biggerCompare(array[j], array[target])) {
        swap(array, target, j);
        target = j;
        console.log('target index:', i, target);
      } else {
        break;
      }
    }
  }
  return array;
}


const testArray = createArray(5);
console.log(insertionSort(testArray));
