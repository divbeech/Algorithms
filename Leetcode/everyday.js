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
