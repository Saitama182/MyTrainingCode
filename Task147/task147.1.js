/* Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
Выведите на экран данные каждого работника в формате имя - зарплата. */

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let rabot of employees){
    console.log(rabot.name+ ' '+ rabot.salary);
   
}