
// const nemo = ["nemo"];
// function findNemo(array){
//     for (let x =0;x<array.length; x++){
//         if (array[x]==='nemo');
//         console.log('Found Nemo');
//     }
// }
// findNemo(nemo);

// // Time complexity 
//  function funChallenge(input){
//      let a = 10;
//      a = 50 + 3;

//      for (let i = 0; i<input.lengthl; i++){
//          anotherFunction();
//          let stranger = true;
//          a++;
//      }
//      return a;
//  } // O(1) + O(n)

//  function compressBoxesTwice(boxes){
//      boxes.forEach(function(boxes){
//          console.log(boxes);
//      });
//      boxes.forEach(function(boxes){
//          console.log(boxes);
//      });
//  }

 // O(n)

//  // Log all pairs of array - Nested loop is O(n^2)
//  const boxes = [1,2, 3];
//  function pairs(array){
//      for (let i = 0; i < array.length; i++){
//          for (let j = 0; j <array.length; j++){
//              console.log(array[i] + array[j] )
             
//          }
//      }

//  }
//  pairs(boxes)

//  // 

// const twoSum = (numbers, target) => {
//     const sorted = numbers.sort((a, b) => a - b);
//     // Try to solve with two pointers approach
//     let left = 0;
//     let right = numbers.length -1;
    
//     while (left < right){
//     if (numbers[left] + numbers[right] === target){
//       return [left, right]
//     }
//     else if (numbers[left] + numbers[right] > target){
//        right--
//     }
//       else if (numbers[left] + numbers[right] < target){
//         left++
//       }
//     }
//     return -1
//   }
//     console.log(twoSum([3,5,6,7], 14))


// /*  Compare Two arrays 0(n^2)*/
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'c'];

// function commonItems(arr1, arr2){
//   for (let i = 0; i < arr1.length; i++){
//     for (let j = 0; j <arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         return true;
//       }
//     }
//   }
//   return false;
// }
// commonItems(array1, array2)

// function commonItems(arr1, arr2){
//     let map = {};
//     for (let i = 0; i < arr1.length; i++){
//       if(!map[array1[i]]){
//         const item = arr1[i];
//         map[item] = true;    
//         }
//     }
//     // console.log(map)
//     for (let j = 0; j < arr2.length; j++){
//       if (map[arr2[j]]){
//         return true;
//       }
//     }
//     return false
//   }
// //   commonItems(array1, array2)

// const strings = ["a", "b", "c", "d"];
// strings[2]
// // push - add something at the end of the array
// strings.push('e') //O(1)


// // POP - REMOVE Last item from the array
// strings.pop('e') // 

// // add the item beginning of the array 

// strings.unshift('x')

// // remove item beginning of the arrau

// strings.shift('x')

// // Splice - add something in the middle
// strings.splice(2, 0, "alien")

// console.log(strings)

/* Stacks ! */
var letters = []; // this is our stack
var word = "racecar"
var reverse= "";

// put letters of word into stack

for (var i = 0; i < word.length; i++){
    letters.push(word[i])
}

// pop off the stack in reverse order
for (var i =0; i < word.length; i++){
    reverse += letters.pop();
}

if (reverse === word){
    console.log(word + " is a palindrom")
}
else{
    console.log( word "isnt a palindrome")
}