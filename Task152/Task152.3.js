// Дана строка 'я учу javascript'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let str = 'я учу javascript';

let sub = str.substr(0,2);
console.log(sub);

let sub1 = str.substring(0,2);
console.log(sub1);

let sub2 = str.slice(0,1);
console.log(sub2);