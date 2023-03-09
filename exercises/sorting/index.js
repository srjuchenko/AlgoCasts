// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(array) {
  let changes = false;
  let n = array.length;

  while (n) {
    let j = 0;
    changes = false;
    while (j < n - 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        changes = true;
      }
      j++;
    }
    n--;
    if (!changes) return array;
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfMin = findMin(array, i);
    [array[i], array[indexOfMin]] = [array[indexOfMin], array[i]];
  }
  return array;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const arr = [];

  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      arr.push(left[l]);
      l++;
    } else {
      arr.push(right[r]);
      r++;
    }
  }
  while (l < left.length) {
    arr.push(left[l]);
    l++;
  }
  while (r < right.length) {
    arr.push(right[r]);
    r++;
  }
  return arr;
}

function findMin(arr, start) {
  let min = arr[start];
  let index = start;
  for (let i = start; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return index;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
