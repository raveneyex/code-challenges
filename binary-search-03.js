/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Example 2:
* Input: nums = [1,3,5,6], target = 2
* Output: 1
*
* Example 3:
* Input: nums = [1,3,5,6], target = 7
* Output: 4
*
* Example 4:
* Input: nums = [1,3,5,6], target = 0
* Output: 0
*
* Constraints:
* 1 <= nums.length <= 10^4
* -10^4 <= nums[i] <= 10^4
* nums contains distinct values sorted in ascending order.
* -10^4 <= target <= 10^4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let lower = 0,
      upper = nums.length - 1,
      ans = 0;

  while (lower <= upper) {
      const middle = Math.floor((lower + (upper - lower) / 2));
      const middleValue = nums[middle];

      if (middleValue === target) {
          return middle;
      }
      else if (middleValue < target) {
          ans = middle + 1;
          lower = middle + 1;
      }
      else {
          upper = middle - 1;
      }

  }
  return ans;
};
