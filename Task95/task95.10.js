// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

let arr = [1,2,3,4,5];
let sum = 0;
for (let elem of arr){
    sum +=elem
}
console.log(sum/arr.length);