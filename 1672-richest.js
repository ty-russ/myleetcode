/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
 * Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 *  input : accounts = [[1,2,3],[3,2,1]]
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let wealth = [];
  for (i = 0; i < accounts.length; i++) {
    let customerAcc = accounts[i];
    let sum = customerAcc.reduce((x, y) => x + y);
    wealth.push(sum);
  }

  return Math.max(...wealth);
};
