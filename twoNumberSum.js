/* Two Number Sum

[3, 5, -4, 8, 11, 1, -1, 6], 10

Solve: Hash table
*/

function twoNumberSum(array, targetSum) {
	for (let i=0; i <= array.length-1; i++){
		const firstNum = array[i];
		for (var j = i + 1; j < array.length; j++){
			const secondNum = array[j];
			if (firstNum + secondNum === targetSum){
				return[firstNum, secondNum];
			}
			
			}
		}
	return [];
	}