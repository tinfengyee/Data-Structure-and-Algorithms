const { createArray, swap, biggerCompare } = require('./util')

function selectSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    let temp = array[i];
    while(j > 0 && biggerCompare(array[j - 1], temp)) {
      array[j] = array[j-1];
      j--;
    }
    // console.log('insert ' + temp);
    array[j] = temp;
  }
  return array;
}

console.log(selectSort(createArray()));