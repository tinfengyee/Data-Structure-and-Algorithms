const { biggerCompare, createArray } = require('../../util')

// function insertionSort (array) {
//   for (let i = 1; i < array.length; i++) {
//     let target = i;
//     for (let j = i - 1; j >= 0; j--) {
//       if (biggerCompare(array[j], array[target])) {
//         swap(array, target, j);
//         target = j;
//         console.log('target index:', i, target);
//       } else {
//         break;
//       }
//     }
//   }
//   return array;
// }

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    let temp = array[i];
    while (j > 0 && biggerCompare(array[j - 1], temp)) {
      array[j] = array[j - 1];
      j--;
    }
    // console.log('insert ' + temp);
    array[j] = temp;
  }
  return array;
}

const testArray = createArray(5);
console.log(insertionSort(testArray));