/*  Дан следующий массив:

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
Сделайте так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек. */
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3,2, 3];
let counter1 = 0;
let counter2 = 0;
for (let elem of arr) {
    if (elem == 2) {
        counter1++;
    }
    if (elem == 3) {
        counter2++
    }

}
console.log('Кол-во двоек ' + counter1);
console.log('Кол-во троек ' + counter2);