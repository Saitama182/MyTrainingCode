/* Решите  через цикл for:
 Дан трехмерный массив с числами:

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
С помощью вложенных циклов найдите сумму элементов этого массива. */

let arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);