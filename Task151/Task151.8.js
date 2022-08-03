// С помощью цикла заполните массив 10-ю случайными целыми числами.

let arr = [];
function getRandomint(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;

}

for (let i=0; i<10; i++){

    arr[i]=getRandomint(1,100);
}
console.log(arr);