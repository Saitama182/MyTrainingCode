// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function func(arr){
    for(let elem of arr){
        if(elem % 2 !=0){
            return false;
        }
    }
    return true;
}
console.log(func([88,2,4,8]));