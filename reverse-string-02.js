/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 *
 * Example 1:
 * Input: s = "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 *
 * Example 2:
 * Input: s = "God Ding"
 * Output: "doG gniD"
 *
 * Constraints:
 * 1 <= s.length <= 5 * 10^4
 * s contains printable ASCII characters.
 * s does not contain any leading or trailing spaces.
 * There is at least one word in s.
 * All the words in s are separated by a single space.
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords_builtIn = function(s) {
  const arr = s.split(' ');
  return arr.map(token => reverseWord_builtIn(token)).join(' ');
};

/**
 *
 * @param {string} s
 * @return {string} s reversed.
 */
const reverseWord_builtIn = function(s) {
  return s.split('').reverse('').join('');
}

const reverseWords_impl = function(s) {
  const arr = s.split('');
  return arr.map(token => reverseWord_impl(token)).join(' ');
}

const reverseWord_impl = function(s) {
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
}


