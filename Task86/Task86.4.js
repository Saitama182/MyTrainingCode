/* Дан следующий объект:

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
Найдите сумму ключей этого объекта и поделите ее на сумму значений. */

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKey= 0;
let sumVal=0 ;
let result;
for (let elem in obj){
    sumVal += obj[elem];
    sumKey += Number(elem);
    result = sumKey/sumVal;
}

console.log(result.toFixed(3));


