// Feburary 2nd Problem. 1480 //

var runningSum = function(nums) {
    let result = [] ;
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++){
        let cv = nums[i]
        currentSum += cv;
        result.push(currentSum)        
    }
    return result
};

// another solution
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] += nums[i-1];
    }
    return nums;
};