// Work in this directory: src
//1.

const variable = "computer";
console.log(variable);

//2.

//this is a string
console.log(typeof "5" );
//this is a number
console.log(typeof 5 );

//3.

let num = 10;
console.log(num);

//4.

let boolVar = true;

console.log(boolVar);

//5.

let x = 5;
let y = 25;

const z = x > y ;

console.log(z);

//6.

let any = "Hello"

console.log(any.toUpperCase());

//.7

let any_2 = "World"

console.log(any_2.toLowerCase());

//8. it's juts Hello
let text = 'Hello';
console.log(text)
text.toUpperCase();
console.log(text);

//9 undefined
let text2;
console.log(text2);

//10 toLowercase -> toLowerCase

let text3 = 'Hello';
console.log(text.toLowerCase());

/*
11. prompt('How old are you?'); -> Number(prompt('How old are you?'))because in js "age" was declared as 
string not like number so we shoud force it manualy to be number
; its work only in browser not in node 
*/

/*
let age = Number(prompt('How old are you?'));
console.log(age)
let nextAge = age + 1;
console.log(`Next year you will be ${nextAge}`);
*/

//12. this for chaking i am useing node;
let name = ('What is your name?');
let age = 25;
let isInSixties = age <= 60 ;// finish the code so that it prints true if the age is in 60s
console.log(`${name} is in sixties: ${isInSixties}`);

/*let name = prompt('What is your name?');
let age = Number(prompt('How old are you?'));
let isInSixties = age <= 60 ;;// finish the code so that it prints true if the age is in 60s
console.log(`${name} is in sixties: ${isInSixties}`);
*/

//13 
let x1 = 5;
console.log(x1++); //its printing x1 first then incrementing it 5
console.log(x1);//6
//14
let y1 = 5;
console.log(++y1);//its incrementing y1 first then printing it 6
console.log(y1);//6

//15 incrementing and decrementing
let x2 =1;
x2++;
console.log(x2);
x2--;
console.log(x2);

//16. PreIncrement (++x) PostIncrement (x++)

//17. undefined

//18.
//loose
console.log('Link' == 'link'); 
//strict
console.log(12 === '12');   
//19.
//loose
console.log('Link' != 'link'); 
//strict
console.log(12 !== '12');  

//20. unexpected results.
let result = "Hello" + 18;
console.log(result); 
