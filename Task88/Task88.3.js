/* Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива. */
let arr = [1,2,3,4,5,6];
for (let i=0; i<arr.length; i++){
    if (arr[i-1]!= undefined && arr[i-2]!=undefined){
        console.log(arr[i-1]+' '+arr[i-2]);
    }
}