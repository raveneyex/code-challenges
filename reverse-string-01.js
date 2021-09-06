/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 *
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * s[i] is a printable ascii character.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString_builtIn = function(s) {
  return s.reverse();
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString_full = function(s) {
  const length = s.length;
  const pivot = Math.floor(length /2);
  let lower = 0;
  let upper = length - 1;

  for (let i = 0; i < pivot; i += 1) {
      if (lower === upper) {
          return;
      }

      const temp = s[lower];
      s[lower] = s[upper];
      s[upper] = temp;
      lower+=1;
      upper-=1;
  }
};

