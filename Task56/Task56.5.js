/* Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. 
Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет. */
let num = 12345677;
if (num % 2 == 0) {
    console.log('четное');
} else {
    console.log('не четное');
}