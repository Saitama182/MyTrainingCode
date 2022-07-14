/* let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.  */

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let obj = {};
for (let elem of arr) {
    if (obj[elem] === undefined) {
        obj[elem] = 1;
    } else {
        obj[elem]++;
    }
}
console.log(obj);