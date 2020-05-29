// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.


var reverseWords =function(s) {
    let result =[];
    const ss = s.split(' ');
    for (let i =0; i < ss.length; i++) {
    result.push(ss[i].split('').reverse().join(''));
    }
    return result.join(' ');

}

/*steps:- 
1. set the result for an empty array
2. split the sentence
3. length. 
4. push the results
5. reverse and join*/