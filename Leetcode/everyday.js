//Reverse a string
function reverse(str){
    return str.split('').reverse().join('');
      
    }
    console.log(reverse("cat"))
    console.log(reverse("tictactoe"))
    console.log(reverse("hello world"))

//Palindrome
function isPalindrome(string) {
	let left = 0;
	let right = string.length-1;
    string = string.replace(/[^0-9A-Za-z]/g,'').toLowerCase();
	while (left < right){
		if(string[left]!==string[right])
			return false
			left++;
			right--
		
	}
	return true;
}
// Robot Return to Origin # 657
var judgeCircle = function(moves) {
    let UD = 0;
    let LR = 0;
    for(let i =0 ; i<moves.length; i++){
        let char = moves[i];
        if(char==='U'){
            UD++;
        }
        else if(char==='D'){
            UD--;
        }
        else if(char==='L'){
            LR++;
        }
        else if(char==='R'){
            LR--;
        }
    }
    return UD===0 && LR===0;
    
};

// Detect Capitalization # 520
var detectCapitalUse = function(word) {
    let count = 0;
    for (let i = 0; i<word.length; i++){
        const letter = word[i];
        if (letter===letter.toUpperCase()){

            count += 1;
            }        
    }     
        
  return (
      count === word.length || // Checks if all the letters are capital
        count === 0 || // checks if all the letters are lower case
        (word[0] === word[0].toUpperCase() && count === 1) // check if the 1st letter & only that letter is capital
      );
    
};

