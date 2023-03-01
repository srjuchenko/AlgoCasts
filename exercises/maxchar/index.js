// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const dict = {};
  let max = 1;
  let charMax = str[0];

  for (let i = 0; i < str.length; i++) {
    dict[str[i]] = dict[str[i]] + 1 || 1;
    if (dict[str[i]] > max) {
      max = dict[str[i]];
      charMax = str[i];
    }
  }
  return charMax;
}

module.exports = maxChar;
