/* Дано число, например, 12345. 
Проверьте, что первым символом этого числа является цифра 1, 2 или 3. 
Если это так - выведите 'да', в противном случае выведите 'нет'.*/

let num = 12345;
let str = String(num);
let first = str[0];
if (first == 1 || first == 2 || first == 3) {
    console.log('да');
} else {
    console.log('нет');
}