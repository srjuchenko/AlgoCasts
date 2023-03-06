// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  const arr = [1, 1];
  let currentFib = 3;

  while (currentFib <= n) {
    let fibN = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = fibN;
    currentFib++;
  }
  return arr[1];
}

module.exports = fib;
