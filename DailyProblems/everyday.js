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
	while (left < right){
		if(string[left]!==string[right])
			return false
			left++;
			right--
		
	}
	return true;
}
