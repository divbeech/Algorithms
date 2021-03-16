
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

const twoSum = (numbers, target) => {
    const sorted = numbers.sort((a, b) => a - b);
    // Try to solve with two pointers approach
    let left = 0;
    let right = numbers.length -1;
    
    while (left < right){
    if (numbers[left] + numbers[right] === target){
      return [left, right]
    }
    else if (numbers[left] + numbers[right] > target){
       right--
    }
      else if (numbers[left] + numbers[right] < target){
        left++
      }
    }
    return -1
  }
    console.log(twoSum([3,5,6,7], 14))
  