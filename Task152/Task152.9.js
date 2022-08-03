// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.


let str = 'www.boroda.html';
let a = '.html';
let end = str.lastIndexOf(a) == str.length-a.length? true: false;

console.log(end);


let str1 = 'www.boroda.hptl';
let a1 = '.html';
let end1 = str1.lastIndexOf(a) == str1.length-a1.length? true: false;

console.log(end1);
