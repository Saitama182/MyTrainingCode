//  Дана строка. Проверьте, есть ли в этой строке символ 'a'.

let str = 'jknm;hbtn';
if (str.indexOf('a') >= 0) {
    console.log('есть')
} else {
    console.log('нет')
}

let str1 = 'ag45rh45r';
let check = str1.indexOf('a') >= 0 ? true : false;
console.log(check);