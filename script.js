//console.log('my name is' + ' ' + 'Dami');

// var
// let
// const

// data types
// variable
// strings
// bolean
// integers

// null
// undefined
// objects
// equalities

// if and else block

let text = 'my name is ';
let my_name = 'dami';
let dami = 208024352304878932;
let ayo = 823892345892348;
let chukuma = 76237834;

// console.log(dami - ayo - chukuma);

// camel case
const iLovePizza = true;
// UpperCamelCase
const ILoveToEatHotDogs = false;
// snake case
const this_is_snake_case = 'cool';

const sentence = `she's so cool`;
// console.log(1 + '2');
// gender = 'female';

// const name = 'dami';
// const hello = `hello name is ${name}, Nice to meet you. I am ${
//   1 + 5
// } years old`;

// let checkAge = true;

// if (checkAge === true) {
//   console.log('correct');
// } else {
//   console.log('wrong');
// }

// console.log(hello);

// console.log(text + myName);

// template literal

// console.log(`my name is ${myName} and i am ${age} years old`);
// console.log(gender);
// console.log(checkAge);

// code block

// 1)age is less than 18
// or
//  2) age is equal to 18

// if (dami <= ayo) {
//   console.log('Dami is ayos age mates');
// } else {
//   console.log('Dami is the younger brother to ayo');
// }

// objects

let dog;

const person = {
  firstName: 'dami',
  lastName: 'ogochukwu',
  age: 30,
};

null;
undefined;

// person.first = 'chukwuma';

// console.log(person.age);

// console.log(typeof 'dami');
// console.log(undefined === null);

const age = 100;
const age2 = '100';

// console.log(age == age2);

// functions

// console.log(Math.round(20.88));
// console.log(alert('hello'));

// function calculate() {
//   console.log('Hello');
// }

// a and b is the parameter while 2 and 7 is the argument
function calculate(a, b) {
  return a + b;
}

calculate(2, 6);

function multiply(a, b, c) {
  return a * b * c;
}

// function logMessage() {
//   return `my name is ${person.firstname + ' ' + person.lastname} , i am ${
//     person.age
//   } `;
// }

// const logMessage = function () {
//   return `my name is ${person.firstname + ' ' + person.lastname} , i am ${
//     person.age
//   } `;
// };

// arrow method

// const writeName = (name, age) => {
//   console.log(`my name is ${name} and i am ${age} years old`);
// };
// const writeName2 = (name, age) => {
//   console.log(`my name is ${name} and i am ${age} years old`);
// };

// const LogMessage = () => {
//   writeName('Dami', 30);
//   writeName2('chukwuma', 50);
// };

// writeName();

// function writeName() {
//   console.log('hello');
// }

// const writeName = (a, b = 3) => {
//   console.log(a + b);
// };

// writeName(2, 3);

// declare a function that takes 2 parameters (state and country ), where state has a default value of "lagos".
// let output be "I reside in lagos, Nigeria"

// const LogMessage = () => console.log('hello');

// const LogMessage = () => `my name is ${person.firstName + ' ' + person.lastName} , i am ${ person.age} `;

// console.log(LogMessage());

// 1) create a person object that contains the following properties (firstname,lastname and age)
// 2) call the logMessage

// const person = {
//   firstName: 'dami',
//   lastName: 'ogochukwu',
//   age: calculate(2, 7),
// };

// console.log(calculate(2, 7));
// console.log(multiply(2, 2, 2));

// const wesTotal = 500;
// const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// console.log(myTotal);
// output = 150;
// Document object model
// const img = globalThis.querySelector('.tour-img');
// console.log(img);

// const img = document.querySelectorAll('.tour-img-container img');

// function toggleRound(event) {
//   const clickedImg = event.target;
//   clickedImg.classList.toggle('round');
// }

// img.forEach((img) => {
//   img.addEventListener('click', toggleRound);
// });
// img.addEventListener('click', toggleRound);

// const myParagragh = document.createElement('p');

// myParagragh.textContent = 'I am a boy';
// myParagragh.classList.add('ptag');

// // console.log(myParagragh);

// const myImage = document.createElement('img');
// myImage.src =
//   'https://images.pexels.com/photos/18885164/pexels-photo-18885164/free-photo-of-wedding-couple-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
// myImage.alt = 'picture of a couple';

// // console.log(myImage);

// const myDiv = document.createElement('div');
// myDiv.classList.add('container');

// myDiv.appendChild(myParagragh);

// // console.log(myDiv);

// const list = document.createElement('ul');
// const li = document.createElement('li');

// li.textContent = 'three';
// list.appendChild(li);

// console.log(list);

// const contactTitle = document.querySelector('.contact-title');
// console.log(contactTitle.remove());

// const container = document.querySelector('.contact-center');
// console.log(container.firstElementChild, 'firstElementChild');

// console.log(contactTitle.firstElementChild, 'firstElementChild');
// console.log(contactTitle.lastElementChild, 'lastElementChild');
// console.log(contactTitle.previousElementSibling, 'previousElementSibling');
// console.log(contactTitle.parentElement, 'parentElement');
// console.log(contactTitle.children, 'children');
// console.log(contactTitle.childElementCount, 'childElementCount');

// const button = document.querySelector('.btn-submit');

// const handleButton = () => {
//   const pTag = document.querySelector('.contact-title p');
//   pTag.classList.toggle('hide');
// };

// button.addEventListener('click', handleButton);

// button.addEventListener('click', () => {
//   const pTag = document.querySelector('.contact-title p');
//   pTag.classList.toggle('hide');
// });

// const input = document.querySelector('input');
// const button = document.querySelector('.btn-submit');

// const handleButton = () => {
//   const inputValue = input.value;
//   alert(`My name is ${inputValue}`);
// };

// button.addEventListener('click', handleButton);

// create a form that has 3 input (name, email and address) and a  submit button. Add event listener to the submit button.

// 1) log out the name, input and address
// 2) add an alert function to display the name, email and address as a sentence

// ternaries, not operator, truthy and falsy value

// const value = 40;
// null;
// undefined;
// '';

// if (value === 10) {
//   console.log('value is 10');
// } else if (value === 11) {
//   console.log('value is 11');
// } else if (value === 12) {
//   console.log('value is 12');
// } else if (value === 13) {
//   console.log('value is 13');
// } else {
//   console.log(value);
// }

// function checkBooleanValue(value) {
//   if (value) {
//     return 'this is truthy value';
//   } else {
//     return 'this is falsy value';
//   }
// }

// const result = checkBooleanValue(null);

// console.log(result);

// if (!value) {
//   console.log('yes it is');
// } else {
//   console.log("No it's not");
// }

// OR operator, AND operator

// value === 'dami' || value === 'chukwuma'
//   ? console.log("I'm hungry")
//   : console.log(value);
// null;
// undefined;
// ('');

// if (value === 'dami' || value === 'chukwuma') {
//   console.log("I'm hungry");
// } else {
//   console.log(value);
// }

// a switch statement
// const value = 'chukwuma';

// switch (value) {
//   case 'dami':
//     console.log("I'm dami");
//     break;
//   case 'chukwuma':
//     console.log("I'm chukuma");
//     break;
//   case 'adewale':
//     console.log("I'm adewale");
//     break;
//   default:
//     console.log(value);
// }

// javascript runs code synchronously and also be asynchronous
// v8 engine = google chrome machine that run javscript

// console.log('dami');

// setTimeout(() => {
//   console.log('chukwuma');
// }, 2000);

// console.log('adewale');

// 1) write a function that takes a number as a parameter and returns "positive" if the number is greater than zero, "negative" if it's less than zero, and "zero" if it's equal to zero

// 2) create a function that accepts a parameter and checks if it's a truthy value. if it is, log "it's truthy" to the console; otherwise, log "it's falsy"

// 3) write a function that takes two parameters ("isWeekday" and "isVacation") representing whether it's a weekday and whether the person is on vacation, but if it's a weekday and not on vacation, it should return "Get up!"
