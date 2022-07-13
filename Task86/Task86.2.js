/* let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
}; 
Увеличьте зарплату каждого работника на 10%,  у которых она меньше или равна 400.
*/
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let elem in obj) {
    if (obj[elem] <= 400) {
        obj[elem] = (obj[elem] * 0.1) + obj[elem];
    }
}
console.log(obj);