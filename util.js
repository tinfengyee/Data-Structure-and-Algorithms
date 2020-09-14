function log(param, desc = 'createArray') {
  console.log(`--- ${desc} ---`);
  console.log(param);
  console.log(`---       ---

  `);
}

function swap(array, a, b) {
  /*   const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

function biggerCompare(a, b) {
  return a - b > 0;
}

function lesserCompare(a, b) {
  return a - b < 0;
}

/**
 * @description Shuffle the array
 * @param {Array} array 
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, i, randomIndex);
  }
  return array;
}

/**
 * @description create simple array
 * @param {number} size array length
 */
function createArray(size = 5) {
  let array = [];
  for (let i = size; i > 0; i--) {
    array.push(i)
  }
  return array;
}

/**
 * @description create a random array
 * @param {number} size array length
 */
function createRandomArray(size = 5, min = 0, max = 20) {
  let array = [];
  const tNum = max - min + 1;
  for (let i = size; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * tNum + min);
    array.push(randomNum);
  }
  // log createArray
  log(array);

  return array;
}

module.exports = {
  log,
  swap,
  biggerCompare,
  lesserCompare,
  shuffle,
  createArray,
  createRandomArray
}