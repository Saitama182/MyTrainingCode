// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

function func(arr){
    for (let i=1; i < arr.length; i++ ){
        if (arr[i-1] == arr[i]){
            return true
        }
    }
    return false
}
console.log(func([1,2,34,4,6,54,54]));