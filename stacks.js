/* Stacks */
//functions: push, pop, peek, length

var letters = []; // this is stack
 var word = "hannah"

 var rword = "";
//Putting letters of word into stack
  for (var i = 0; i<word.length; i++){
      letters.push(word[i]);
  }

//pop off the stack in reverse order
for (var i = 0; i <word.length; i++){
    rword += letters.pop();
}

if (rword ===word){
    console.log(word +"is a palindrome");
}
else{
    console.log(word + "is not a palindrome")
}