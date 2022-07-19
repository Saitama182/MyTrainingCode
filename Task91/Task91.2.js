/* С помощью цикла сформируйте следующий массив:

['11111', '22222', '33333', '44444', '55555']*/
let arr = [];
for (let i = 1; i < 6; i++) {
    let str = '';
    for (let j = 1; j < 6; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);