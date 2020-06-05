/*
Common Array Methods*/



/*****    *******/
 var arr = ["a", "b", "c"];

 arr.push("d")
 console.log(arr);

 console.log(arr.pop());
 
 var arr2 = ["g", "r"];
 console.log(arr.concat(arr2));/* joins the 2 arrays*/
 console.log(arr2);

 console.log(arr.join("!"));

 console.log(arr.reverse());

 console.log(arr.shift()); /* remove the first element and return that element*/
 
 console.log(arr.unshift("p"))/* adds the element in the end */

 console.log(arr.slice(1, 2))/* (start, n-1 index)*/

 console.log(arr.sort())

 console.log(arr.splice(2, 3, "add"))/* modify the array*(start, # of items to remove, add) */







