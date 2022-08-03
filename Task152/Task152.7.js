// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

let str = 'eds554y5433ca';

let end = str.lastIndexOf('a') == str.length-1? true:false;
console.log(end);


let str1 = 'eds554y5433cagg';

let end1 = str1.lastIndexOf('a') == str1.length-1? true:false;
console.log(end1);