// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let result = 0;
for (var i=1; i<1000; i++){
    result +=i;
    if(result > 100){
        break;
    }
}
console.log(i);