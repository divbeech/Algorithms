/* [0 1 1 2 3 5]*/
function fibonacci(n){
    const arr = [0, 1];
    for (let i = 2; i <=n; i++){
        let a = arr[i - 1];
        let b = arr[i - 2];
        arr.push(a + b);
        
    }
    return arr[n];
}
console.log(fibonacci(5))