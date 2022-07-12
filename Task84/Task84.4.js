// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr = [-122,1,2,3,4,5,-6,-7,-8,-9];
let result = [];
for (let elem of arr){
    if (elem > 0){
        result.push(elem);
    }
}
console.log(result);