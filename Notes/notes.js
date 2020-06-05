/*
Big 0 Notation */

/******   0(N)   *******  concat ******/

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


/*******  0(N*logN)  ***** slice *****/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

/*******  0(N*logN)  ***** splice *****
 * Splice method changed an array by removing or replacing existing elements &/or adding new elements in place */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


/*****    *******/
 var arr = ["a", "b", "c"];

 arr.push("d")
 console.log(arr);

 console.log(arr.pop());
 
 var arr2 = ["g", "r"];
 console.log(arr.concat(arr2));
 console.log(arr2);

 console.log(arr.join("!"));

 console.log(arr.reverse();)



