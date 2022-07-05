// Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.
let num = 1230745701;
let str = String(num);
if ( str[str.length-1] == 0) {
    console.log('true');
} else {
    console.log('false');
}