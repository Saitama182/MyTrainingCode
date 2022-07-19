// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

let arr = [1,2,3,6];
let sum =0;
for (let elem of arr){
    sum += (elem**2);
}
console.log(sum);