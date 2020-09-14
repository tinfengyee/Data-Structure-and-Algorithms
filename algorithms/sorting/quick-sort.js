const { biggerCompare, lesserCompare, swap, createArray } = require('../../util')

// function quick(array, left, right) {
//   if (right - left < 1) {
//     return;
//   }
//   const target = array[left];
//   let l = left;
//   let r = right;

//   while(l < r) {
//     while(l < r && array[r] >= target) {
//       r--;
//     }
//     array[l] = array[r];
//     while(l < r && array[l] <= target) {
//       l++;
//     }
//     array[r] = array[l];
//   }
//   array[l] = target;
//   console.log(array);
//   quick(array, left, l - 1);
//   quick(array, l + 1, right)
//   return array;
// }

function partition(array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while(i <= j) {
    while(lesserCompare(array[i], pivot)) {
      i++;
    }
    while(biggerCompare(array[j], pivot)) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  // sort
  console.log(array);
  return i;
}

function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
}

function quickSort(array) {
  return quick(array, 0, array.length - 1);
}
const testArray = createArray();

// [2, 3, 5, 1, 4]
console.log(quickSort(testArray));