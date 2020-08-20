// let, const

// Advice: always use const unless you know you are gonna reassign the value.
// This makes your code more robust, more secure and less prone to errors.
let score = 30;
score = 31;

console.log(score);

// String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;
// const rating = 4.5; // there's no float in JavaScript
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; // z: undefined
//
// console.log(typeof z)

// Strings: Concatenation
// Old way (ES5 or earlier)
console.log('My name is ' + name + ' and I am ' + age);
// Template String (Available after ES6)
console.log(`My name is ${name} and I am ${age}`);

const s = 'Hello World';
// length here is a property of s, not a method which will then require
// parentheses.
console.log(s.length);
// Good insight: a method is basically a function that is associated with an
// object.
console.log(s.toUpperCase());

console.log(s.substring(0, 5));

console.log(s.substring(0, 5).toUpperCase());
// Split a string into an array.
console.log(s.split(''));
// Add delimiters.
const s1 = 'tech, computers, mac, it, javascript, code';
console.log(s1.split(', ')) // comma + space

// Arrays - variable that hold multiple values.

// Create using array constructor.
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
// Use brackets.
const fruits = ['apples', 'oranges', 'watermelons'];
console.log(fruits);
// Arrays can contain different types.
const bizzareArray = ['apples', 'oranges', 1, 2, true, 'yoho'];

// JavaScript does not allow static-typing, while TypeScript does.
// x name::string

// Arrays are always zero based.
console.log(fruits[1]);
// Add values to an array.
fruits[3] = 'grapes';
console.log(fruits);

// You cannot reassign arrays while using const:
// fruits = [] // error

// Other manipulations.
fruits.push('mangos'); // append values to the end of an array
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

// Object Literals (Key-Value pairs)
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

alert(person); // it'll just show object
console.log(person);
console.log(person.firstName, person.lastName, person.age);
