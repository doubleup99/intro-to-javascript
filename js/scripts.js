// var name = "ben";
// console.log("mike");
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


// const myName = "Mike";
//
// const myName2 = new String("Mike");
// // loose equals don't care about datatyoe strict equals does
// console.log(myName === myName2);
// console.log(myName == myName2);
//
// // Wierd math things
// console.log(0.1 + 0.2);

// NaN : not a number like 0/0

// let number = 1;
// console.log(number);
// number++;
// console.log(number);
// number++;
// console.log(number);
// number--;
// console.log(number);
// number+=5;
// console.log(number);
//
// let cartTotal = 0;
//
// const item1 = 7.99;
// const item2 = 9.99;
// const discount = 5.00;
// const discount2 = .9;
//
// console.log(cartTotal += item1);
// console.log(cartTotal += item2);
// console.log(cartTotal -= discount);
// console.log(cartTotal *= discount2);

//10 is the default in the prompt
// const num1 = +prompt("Give me a number",10);
// const num2 = +prompt("Give me a second number",10);
// alert(num1 + num2);

// const firstName = "Ben";
//
// if(firstName === "Jacob"){
//   //if condition is true then this runs
//   // Indent within curly braces
//   console.log("Your name is Jacob");
// }else if(firstName === "Ben"){
//   // if second condition is met this runs
//   console.log("Your name is Ben");
// }else{
//   // if neither are true this runs
//   console.log("your name is not ben or jacob");
// }
// and statement: both have to be true
// if (true && true){
//   console.log("Great success");
// }
// // or statement only one has to be true
// if (true || false){
//   console.log("again succeed");
// }
//
// const age = 25;
//
// if(age >= 21 && age <= 80){
//   console.log("You are over 21, but less than dead.");
// }
// ! is not statement which reverses the truthiness of the boolean value

// if(!false){
//   console.log("victory.");
// }
//
// const lastName = "";
// evaluating that the variable lastName has a value assigned to it which would make it true and if the variable exists but no value it would be false
// if(!lastName){
//   console.log(`You did not provide a last name`);
// }
//
// const name = prompt("Please provide your name");
//
// if(name){
//   alert(`your name is ${name}`);
// }else{
//   alert("You did not provide a name");
// }

// name ? alert(`your name is ${name}`) : alert("invalid name");
 // evaluation ? if true : if false

 // const superhero = prompt("What is your favorite Superhero");
 //
 // switch(superhero){
 //   case "superman" :
 //    console.log("Superman wears tights");
 //    break;
 //
 //   case "batman" :
 //    console.log("Batman is awesome");
 //    break;
 //   default :
 //    console.log("We don't know that superhero");
 // }
 //
 // const age = confirm("Are you over 18");
 //
 // if(age){
 //   const under80 = confirm("Are you less than 80");
 //   if(under80){
 //     const movieLike = confirm("Do you like Star Wars");
 //     if(movieLike){
 //       alert("You have great taste in movies");
 //     }
 //   }else if(!under80){
 //     const fruitLikes = confirm("Do you like prunes");
 //     if(fruitLikes){
 //       alert("Prunes are great");
 //     }
 //   }
 // }else{
 //   alert("You are not old enough");
 // }

 const username = prompt("What is your name");
 const favColor = prompt("What is your favorite color?","red, yellow, orange, green, blue, pink, purple, black, white, or grey");

 switch(favColor.toLowerCase()){
  case "red" :
    alert(`${username} red is dead!`);
    break;
  case "yellow" :
    alert(`${username} yellow is the best!`);
    break;
  case "green" :
    alert(`${username} green is mean!`);
    break;
  case "orange" :
    alert(`${username} orange is for orangatangs!`);
    break;
  case "blue" :
    alert(`${username} blue is for glue!`);
    break;
  case "pink" :
    alert(`${username} you get a wink for pink!`);
    break;
  case "purple" :
    alert(`${username} you are a purple people eater!`);
    break;
  case "black" :
    alert(`${username} black is where it's at!`);
    break;
  case "white" :
    alert(`${username} white is delightful!`);
    break;
  case "grey" :
    alert(`${username} grey is boring, go to seattle!`);
    break;

  default:
    alert(`${username} come on pick a real color!`);
 }
