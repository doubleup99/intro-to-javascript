// var name = "ben";
// "ben" is string as it is in quotes
// number
// var lukynumber = 32;

// boolean
// var boolean = true;

// undefined
// var mystery;

// String Object
// var nameTwo = new String("ben");


// const name = "Mike";

// {
  // const name = "Brit";
  // console.log(name);
// }

// console.log(name);


// const greeting ="Hello my name is: ";
// const name = "Bob";
//
// console.log(`Lorem ipsum dolor sit amet, ${name} consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
//
// console.log('sdfasdkjfkasdjgkasdjk;adf'.length);
//
// const num = new Number(42);
// const num2 = 42;
//
// const array = [1, 2, 3];
// const array2 = new Array(1, 2, 3);
// const arrayMixed = ["mike", 36, true];
// const obj = {
//   name: "Mike",
//   age: 36
// };
// console.log(obj);

// alert("Danger, Will Robinson!!");


// const response = confirm("Are you sure?");
//
// console.log(response);
//
// const favNum = prompt("What is your favorite number?");
//
// const realNum = parseInt(favNum);
// // changes it to a number instead of a string which is what the input take
// console.log(favNum);

const firstName = prompt("What is your first name?");
const lastName = prompt("What is your last name");

console.log(firstName);
alert(lastName);

const birthday = prompt("What is your birthday");
const correctBirthday = confirm(`Are you sure that ${birthday} is your birthday`);

alert(`Your birthday in date format is ${new Date(birthday)}`);
