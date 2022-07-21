/*  Дан трехмерный массив с числами:

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
С помощью вложенных циклов найдите сумму элементов этого массива.*/

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

for (let subsubArr of arr) {
    for (let subArr of subsubArr) {
        for (let elem of subArr) {
            sum += elem;
        }

    }
}
console.log(sum);