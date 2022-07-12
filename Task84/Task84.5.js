// let arr = ['a', 'b', 'c', 'd', 'e']; переверните этот массив
let arr = ['a', 'b', 'c', 'd', 'e'];
let result =[];
for (let i= arr.length-1; i>=0; i--){
    result.push(arr[i]);
}
console.log(result);