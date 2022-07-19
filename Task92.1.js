/* Дан массив:

let arr = [10, 20, 30, 40, 21, 32, 51];
Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму. */

let arr = [10, 20, 30, 40, 21, 32, 51];
let sum =0;

for (let i=0; i<arr.length; i++){
    let str = String(arr[i]);
    if (str[0] == 1 || str[0] == 2 ){

    sum += Number(str);
    }
}
console.log(sum);