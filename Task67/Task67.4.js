// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.
let result = 1;
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);