// Преобразуйте первые 2 буквы строки в верхний регистр.

let str = 'bryansk';
 
let result = str.slice(0,2).toUpperCase()+str.slice(2);
console.log(result);