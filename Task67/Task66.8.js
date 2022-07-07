// Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.
let arithmetic = 0;
let arr = [1, 2, 3, 4, 5];
for (let i =0; i<arr.length; i++){
    arithmetic += arr[i];
}
console.log(arithmetic/arr.length);