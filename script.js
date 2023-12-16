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

// console.log(myParagragh);

// const myImage = document.createElement('img');
// myImage.src =
//   'https://images.pexels.com/photos/18885164/pexels-photo-18885164/free-photo-of-wedding-couple-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
// myImage.alt = 'picture of a couple';

// console.log(myImage);

// const meParagragh = document.createElement('p');
// meParagragh.textContent = "javascript is hard but we will pull throught"
// console.log(meParagragh)

// const myspan = document.createElement('span');
// myspan.appendChild(meParagragh)
// console.log(myspan)

// const myDiv = document.createElement('div');
// myDiv.textContent = 'my name'
// myDiv.classList.add('container');

// myDiv.appendChild(myImage)
// myDiv.appendChild(myParagragh);
// console.log(myDiv);
// const myPtag = document.createElement('p');
// myPtag.textContent = 'paragragh';
// console.log(myPtag.remove());

// const myDiv = document.createElement('div');
// myDiv.appendChild(myPtag);
// console.log(myDiv);
// console.log(myPtag.remove());

//
// const contactTitle = document.querySelector('.contact-title');
// // console.log(contactTitle.remove());

// const container = document.querySelector('.contact-center');
// console.log(container.firstElementChild, 'firstElementChild');

// console.log(contactTitle.firstElementChild, 'firstElementChild');
// console.log(contactTitle.lastElementChild, 'lastElementChild');
// console.log(contactTitle.previousElementSibling, 'previousElementSibling');
// console.log(contactTitle.parentElement, 'parentElement');
// console.log(contactTitle.children, 'children');
// console.log(contactTitle.childElementCount, 'childElementCount');

// const meDiv = document.createElement('div');
// meDiv.classList.add("header");
// meDiv.appendChild(myspan)

// console.log(meDiv);

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

// const clickHolder = () => {
//   console.log("")
// };

// function clickButton() {
//   buttons.addEventListener("click", clickHolder)
// };

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

// const number = 50;

// console.log(number);
// function Getnumber (number) {
//   if(number > 0) {
//     console.log('positive');
//   }else if(number < 0){
//     console.log('negative');
//   }else if(number === 0) {
//     console.log('zero');
//   }else{
//     console.log('number')
//   };
// };

// const check = checkTruthy(30);

// console.log(check);

// function checkTruthy(value) {
//   if (value) {
//     console.log("it's truthy");
//   } else {
//     console.log("it's falsy");
//   }
// };
// const alam = checkalam( )

// function alarm(isWeekday, isVacation) {
//   if (isWeekday && !isVacation) {
//     return "Get up!";
//   } else {
//     return "No alarm";
//   }
// };
// // console.log(alarm);

// console.log(alarm(true, false));

// ARRAYS

// An array is used for holding a list of items where the order matters

// console.log(nameValue[5]);

// array methods:

// ==> length
// console.log(nameValue.length);
// ==>reverse
// const numberValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// toString()
// spread operator

// const numberValue2 = [...numberValue];
// console.log(numberValue2);
// console.log(numberValue.reverse());
// ==>slice
// console.log(numberValue.slice(2, 7));

// reverse the numberValue and spread the output of the reserved value into another variable, then slice out from index 2 to 4

const nameValue = [
  'dami',
  'chidi',
  'ola',
  'ade',
  'ogochukwu',
  'austin',
  'jide',
];

// nameValue.push('Jennifer', 'esther', 'olajide');
// console.log(nameValue);

// const nameValue2 = [...nameValue, 'lux'];
// console.log(nameValue2);

// ==>unshift
// nameValue.unshift('Jennifer', 'esther', 'olajide');
// console.log(nameValue);
// ==>pop

// nameValue.pop();
// console.log(nameValue);
// const numberValue2 = [...nameValue];
// numberValue2.pop();
// console.log(numberValue2);

// const numberValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ==>toString()
// console.log(numberValue.toString());
// console.log(typeof numberValue[0]);

const comments = [
  { text: 'cool beans', id: 123 },
  { text: 'kunle love to eat', id: 723 },
  { text: 'Love this', id: 33 },
  { text: 'Neoto', id: 233 },
  { text: 'goog bikes', id: 333 },
];

// for loop
// find
// foreach
// filter
// map
//
// adding a name property to the array of object
comments.forEach((comment) => {
  comment.name = 'dami';
});
// console.log(comments);

const mapArray = comments.map((item) => item.text + ' ' + 'dami');
// console.log(mapArray);

const findBeansId = comments.find((item) => item.id === 333);
const findBeansText1 = comments.find((item) => item.text === 'cool beans');
const findBeansText2 = comments.find((item) =>
  item.text.includes('cool beans')
);

// const filterArray = comments.filter((item) => item.id < 200);
comments.sort((a, b) => a.id - b.id);

// console.log(comments);
// const loopComment = comments.forEach((item) => {
//   console.log(item.text + ' ' + 'dami');
// });

// const numArray = [4, 1, 9, 2, 5, 3, 7, 8];
// const alphabetArray = ['b', 'a', 'k', 'd', 'c'];
// console.log(alphabetArray.sort());

// console.table(filterArray);
// console.log(comments);

// console.log(findBeansId);
// console.log(findBeansText2);
// console.log(comments[3]);
// console.log(comments.pop());
// console.log(comments.unshift())

// const nameValue = [
//   'dami',
//   'chidi',
//   'ola',
//   'ade',
//   'ogochukwu',
//   'austin',
//   'jide',
// ];

// console.log(
//   nameValue.findIndex((item) => {
//     if (item === 'austin') {
//       return true;
//     } else {
//       return false;
//     }
//   })
// );

// for (let i = 10; i < 120; i += 2) {
//   console.log(i);
// }

const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 10, 65];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] + ' ' + 'dami');
// }

// for (const number of numbers) {
//   console.log(number + ' ' + 'dami');
// }

const damilare = {
  name: 'dami',
  age: 60,
  cool: true,
};

// for (const prop in damilare) {
//   console.log(prop);
// }

// 1) create and array named "fruits" containing the names of three different fruits. log out the array in the console
// 2) add two more fruits to the "fruits" array, then, remove the second fruit from the array. log out the modified array
// 3) use a loop to iterate through the "fruits" array and log each fruit on a new line
// 4) create a function called 'findElement' that takes and array and a target element as parameters. The function should return the index of the target element in the array, or -1 if the element is not found. Test the function with the 'numbers' array and a target element of your choice

const fruits = ['apple', 'banana', 'orange'];

// 1) console.log(fruits)

// 2) fruits.push("grape","kiwi")
// fruits.splice(1,1)
// console.log(fruits)

// 3) const updatedFruit = fruits.map((fruit) => {
//   console.log(fruit);
// });

// 4)  function findElement(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//     return -1;
//   }
// }

// const result = findElement([1, 2, 3, 4, 5], 4);
// console.log(result);
