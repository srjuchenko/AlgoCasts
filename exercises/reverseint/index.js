// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = String(n).split("").reverse().join("");
  const num = n >= 0 ? parseInt(str) : parseInt(str) * -1;
  return num;
}

module.exports = reverseInt;
