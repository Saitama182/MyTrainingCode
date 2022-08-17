// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

function func(num){
    let str = String(num);
    for (let i=0;i<str.length; i++){
        if ((Number(str[i])) % 2 != 0 ){
            return false;
        }
    }
    return true;
}

console.log(func(24684));