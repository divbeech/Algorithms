/* Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n,counter = 0) {
//     result = false
//     if(counter<8){
//     let array = n.toString().split('').map(n=>n*n)
//     let sum = array.reduce((a,b) => a + b, 0)
//         if (sum===1){
//         return result =  true;
//         }else {
//             counter ++
//             isHappy(sum, counter)
//         }
//     }
    
// };


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = [...(n + '')];
    
    for (let i = 0; i < 999; i++) {
      let count = 0;
      
      for(let b = 0; b < n.length; b++) {
        count += n[b] ** 2;
      }
      
      if (count === 1) return true;
      n = [...(count + '')];
    }
    return false;
  };


