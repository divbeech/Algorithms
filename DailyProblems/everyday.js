//Reverse a string
function reverse(str){
    return str.split('').reverse().join('');
      
    }
    console.log(reverse("cat"))
    console.log(reverse("tictactoe"))
    console.log(reverse("hello world"))

//Palindrome
var isPalindrome = function(s) {
    let word = s.split('');
    let reverse = word.reverse();
    if (word === reverse){
        return true
    }
    else{
        return false
    }
};