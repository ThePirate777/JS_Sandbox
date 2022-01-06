//log to console
console.log('hello world');
console.log(123);
console.log(true);
var greeting = 'hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1,b:2});
console.table({a:1,b:2});
console.error('this is some error');
console.clear();
console.warn('this is a warning');
console.time('hello');
 console.log('hello world');
 console.log('hello world');
 console.log('hello world');
 console.log('hello world');
console.timeEnd('hello'); 
 /*multi
 line
comments
*/
 
//var,let,const
var name = 'john doe';
console.log(name);
name = 'steve smith';
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

//var can only include letters,numbers,_, $
// can not start with number
var 1name = 'john';

//multi word vars
var firstName ='john'; //camel case
var first_name = 'john'; //underscore
var FirstName = 'tom'; //pascal case
var firstname;

//Let
let name = 'john doe';
console.log(name);
name = 'steve smith';
console.log(name);

//const
const name ='john';
console.log(name);
name ='sara'; //cannot reassign
const greeting; //hvae to assign a value

const person = {
    name: 'john',
    Age: 30
}
person.name = 'sara';
person.age = 32;

console.log(person);

const numbers= [1,2,3,4,5];
numbers.push(6);
console.log(numbers);

//PRIMITIVE DATA TYPE

//string
const name = 'john doe';
const number = '78';
//number
const age = 45;
//boolean
const haskids = true;
//null
const car = null;
//undefined
let test;
//symbol
const sym = Symbol();
console.log(typeof );
 
//REFERENCE DATA TYPES - objects
//array
const hobbies = ['movies','music'];
//object literal
const address = {
    city:'boston''
    state :'USA'
}

const today = new Date();
console.log(today);
console.log(typeof today);


//DATA TYPE CONVERSION
 
let val;

//number to string
val = String(5);
val = String(4+4);

//bool tp string
val = String(true);

//date to string
val = String(new Date());

//array to string
val = String([1,2,3,4]);

//toString()
val = (5).toString();
val = (true).toString();

//output
console.log(val);
console.log(typeof val);
console.log(val.length);
 
//string to number
val = Number('5');
val = Number(true);
val = Number(null);
val = Number('hello');
val = Number([1,2,3,4]);

val = parseInt('100.30');
val = parseFloat('100.30');

//output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//TYPE COERCION
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

//NUMBERS N MATH OBJECT
const num1 = 100;
const num2 = 30;
let val;
//simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;
 
//math object
val = Math.PI;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-4);
val = Math.pow(8,2);
val = Math.min(2,54,7,68,54);
val = Math.max(4,56,76,8,9);
val = Math.random();

//For random whole number
val = Math.floor(Math.random() * 20 + 1);

console.log(val);


// STRING METHODS AND CONCATENATION
const firstName = 'Willam';
const lastName = 'Shakespeare';
const age = 18;
const str = 'Hello my name is john';
const tags = 'web design,web development, web programming';

let val;

//concatenation
val = firstName + ' ' + lastName;

//append
val = 'john';
val = 'doe';

val = 'hello,my name is ' + firstName + 'and I am' + age;

//escaping
val = 'that\'s awesome, I can\'t wait';

//length
val = firstName.length;

//concat()
val = firstName.concat(' ',lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

//indexOf()
val = firstName.indexOf('o');
val = firstName.lastIndexOf('h');

//charAt()
val = firstName.charAt('2');
//get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0,4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('john','jack');

//includes()
val = str.includes('john');
val = str.includes('poo');

console.log(val);

//TEMPLATE LITERALS
 const name = 'john';
const age = 30;
const job = 'web developer';
const city = 'new delhi';
let html;

//without template strings(es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '</li><li>city: ' + city + '</li><ul>';

html = '<ul>' +
'<li>name:' + name + '</li>' +
'<li>age:' + age + '</li>' +
'<li>job:' + job + '</li>' +
'<li>city:' + city + '</li>' +
'</ul>';

function hello(){
    return 'hello';
}
//with template strings(es6)
html = `
      <ul>
      <li>name: ${name}</li>
      <li>age: ${age}</li>
      <li>job: ${job}</li>
      <li>city: ${city}</li>
      <li>${2+2}</li>
      <li>${hello()}</li>
      <li>${age > 30 ? 'over 30' : 'under 30'}</li>
      
      </ul> 
`;


document.body.innerHTML = html;
 
//ARRAY & ARRAY METHODS
const numbers = [34,56,76,43,21,98];
const numbers2 = new Array(34,22,54,12,32);
const fruit = ['apple','banana','mango'];
const mixed = [22,'hello',true,undefined,null,{a:1,b:2},new Date()];

let val;

//get array length
val = numbers.length;
//check if it is array
val = Array.isArray(numbers);
val = Array.isArray('hello');
//get single value
val = numbers[3];
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(56);

//Mutating Arrays
//add on to end
numbers.push(250);
//add on to front
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice value
numbers.splice(1,1);
numbers.splice(1,3);
//reverse
numbers.reverse();

//concatenate array
val = numbers.concat(numbers2);
//sorting arrays
val = fruit.sort();
val = numbers.sort();

//use the 'compare function'
val = numbers.sort(function(x,y){
    return x-y;
});

//reverse sort
val = numbers.sort(function(x,y){
    return y-x;
    });
 
//find
function under50(num){ //or over50
    return num < 50;   //then > 50
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);

//OBJECT LITERALS
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age:30,
  hobbies:['music','sports'],
  email:'steve@gmail.com',
  address:{
      city:'Miami',
      state:'FL'
  },
  getBirthYear: function(){
      return 1987;
      return 2017 - this.age;
  }  
}

let val;

val = person;
//get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies; 
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'john', age: 30},
    {name: 'mike', age: 23};
    ];

for(let i = 0; i < people.length; i++){
   console.log(people[i].name);
}


//DATES & TIMES
let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');

val = birthday;
val = today.getMonth();//zero based
val = today.getDate();
val = today.getFullYear();
val = today.getDay();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
console.log(val);


//IF STATEMENTS & COMPARISON OPERATORS
if(something){
    do something
} else {
    do something else
}

const id = 100;

//equal to
if(id ==100){
    console.log('CORRECT');
    } else {
        console.log('INCORRECT');
    }

//not equal to
if(id !=101){
    console.log('CORRECT');
    } else {
        console.log('INCORRECT');
    }

//equal to value & type
if(id ===100){
    console.log('CORRECT');
    } else {
        console.log('INCORRECT');
    }

//equal to value & type
if(id !== 100){
    console.log('CORRECT');
    } else {
        console.log('INCORRECT');
    }

//test if undefined
if(typeof id !== 'undefined'){
    console.log('the ID is ${id}');
} else {
    console.log('no id');
}

//greater or less than
if(id > 200){ //or >=
    console.log('correct');
    } else {
        console.log('incorrect');
    }

//if else
const color = 'yellow';
 
if(color === 'red'){
    console.log('color is red');
 } else if (color === 'blue'){
        console.log('color is blue');
} else {
    console.log('color is not red or blue');
}

//LOGICAL OPERATORS

const name = 'Steve';
const age = 30;

//and &&
if(age > 0 && age < 12){
    console.log('${name} is a child');
    } else if(age >= 13 && age <= 19){
        console.log('${name} is a teenager');
 } else {
     console.log('${name} is an adult');
 }

//or ||
if(age < 16 || age > 65){
    console.log('${name} can not run in race');
    } else {
        console.log('${name} is registered for the race');
 }

//TERNARY OPERATOR
console.log(id === 100 ? 'correct' : 'incorrect'); 

//SWITCHES
const color = 'red';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
      day = 'Friday';
      break;
  case 6:
      day = 'Saturday';
      break;
}

console.log('Today is ${day}');


//FUNCTION DECLARATIONS

function greet(firstName, lastName){
    //console.log('hello');
    return 'Hello' + firstName + ' ' + lastName;
}

console.log(greet('john','doe')); 

function greet(firstName, lastName){
    if(typrof firstName === 'undefined'){firstName = 'John'}
    if(typeof lastName === 'undefined'){lastName = 'doe'}
    //or function greet(firstName = 'john', lastName = 'doe')
    return 'hello' +  firstName + ' ' + lastName;
}

console.log(greet('steve','smith'));
//or console.log(greet());

//Function Expressions

const square = function(x = 3){
    return x*x;
};

console.log(square());

//immediately invokable function expressions - IIFEs

(function(){
    console.log('IIFE Ran..');
})();

(function(name){
    console.log('hello '+ name);
})('John');

//property methods

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log('Edit todo ${id}');
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

//GENERAL LOOPS

//for loop
for(let i = 0; i < 10; i++){
    console.log(i); //or ('Number '+ i);
 
}

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }

    if(i ===5){
        console.log('stop the loop');
        break;
    }
    console.log('Number '+ i);
}

//while loop

let i = 0;

while(i < 10){
    console.log('Number ' + i);
    i++;
}
 
//do while loop
let i = 100;
do {
    console.log('Number ' + i);
    i++;
}
 while(i < 10);

//loop through array
 const cars = ['ford','chevy','honda','toyota'];

 for(let i = 0; i < cars.length; i++){
     console.log(cars[i]);
 }//or

 //foreach
 const cars = ['ford','chevy','honda','toyota'];

 cars.forEach(function(car){
     console.log(car);
 });//or
 cars.forEach(function(car, index, array){
     console.log(`${index} : ${car}`);
     console.log(array);
 });

 //map
 const users = [
     {id: 1,name: 'john'},
     {id: 2,name: 'sara'},
     {id: 3,name: 'karen'}
 ];

 const ids = users.map(function(user){
     return user.id;
 });

 console.log(ids);

//for in loop
const user = {
    firstName: 'john',
    lastName: 'doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

//WINDOW METHODS / OBJECTS / PROPERIES

console.log(123);

//alert
window.alert('hello world');

//prompt
const input = prompt();
alert(input);

//confirm
if(confirm('are you sure')){
    console.log('yes');
} else {
    console.log('no');
}


let val;
//outer height n width
val = window.outerHeight;
val = window.outerWidth;
//inner height n width
val = window.innerHeight;
val = window.innerWidth;

//scroll points
val = window.scrollY;//in index.html b/w <h1> n <script> create
//<div style="margin-top:1000px;"></div>
val = window.scrollX;

//location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//redirect
window.location.href = 'http://google.com';

//reload
window.location.reload();

//history object
window.history.go(-2);

//navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);


//BLOCK SCOPE WITH LET & CONST

//global scope
var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('function scope: ', a, b, c);
}

test();


 if(true) {
//block scope
var a = 4;
let b = 5;
const c = 6;
console.log('if scope: ', a, b, c);
 }


 for(let a = 0; a < 10; a++) {
     console.log('loop: ${a}');
 }

 console.log('global scope: ', a, b, c);


 