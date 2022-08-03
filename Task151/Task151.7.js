// Выведите на экран случайное целое число от 1 до 100.

function getRandomInt(min , max){
    return Math.floor(Math.random()*(max-min+1))+min;

}
console.log(getRandomInt(1,100));