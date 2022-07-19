// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr = [1,4,5,5,78];
let res ='';
for (let elem of arr){ 
    if (elem == 5){
        res = 'yes';
        break;
    }
}
console.log(res);