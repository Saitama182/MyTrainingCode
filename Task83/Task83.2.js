// Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i] -= 1;
}
console.log(arr);