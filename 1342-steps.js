/**
 * Given an integer num, return the number of steps to reduce it to zero.
 * In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 * Input : num =14
 */

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  let currentVal = num;
  while (currentVal > 0) {
    console.log(currentVal, steps);
    if (currentVal % 2 == 0) {
      currentVal = currentVal / 2;
      steps++;
    } else {
      currentVal--;
      steps++;
    }
  }

  return steps;
};
