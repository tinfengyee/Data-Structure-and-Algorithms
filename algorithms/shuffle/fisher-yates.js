const { swap, createArray } = require('../../util')

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i + 1));
//     swap(array, i, randomIndex);
//   }
//   return array;
// }
function shuffle(array) {
  let currentIndex = array.length;
  while(currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

console.log(shuffle(createArray()));