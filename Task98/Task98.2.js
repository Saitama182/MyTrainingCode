/* Сформируйте с помощью двух вложенных циклов следующий массив:

[['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']] */ 
let arr = [];
for (let i=0;i<3;i++){
    arr[i]=[];
    for (let j=0;j<4;j++){
        arr[i].push('x');
    }
}
console.log(arr);