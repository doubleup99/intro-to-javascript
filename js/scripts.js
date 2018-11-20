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

 // const username = prompt("What is your name");
 // const favColor = prompt("What is your favorite color?","red, yellow, orange, green, blue, pink, purple, black, white, or grey");
 //
 // switch(favColor.toLowerCase()){
 //  case "red" :
 //    alert(`${username} red is dead!`);
 //    break;
 //  case "yellow" :
 //    alert(`${username} yellow is the best!`);
 //    break;
 //  case "green" :
 //    alert(`${username} green is mean!`);
 //    break;
 //  case "orange" :
 //    alert(`${username} orange is for orangatangs!`);
 //    break;
 //  case "blue" :
 //    alert(`${username} blue is for glue!`);
 //    break;
 //  case "pink" :
 //    alert(`${username} you get a wink for pink!`);
 //    break;
 //  case "purple" :
 //    alert(`${username} you are a purple people eater!`);
 //    break;
 //  case "black" :
 //    alert(`${username} black is where it's at!`);
 //    break;
 //  case "white" :
 //    alert(`${username} white is delightful!`);
 //    break;
 //  case "grey" :
 //    alert(`${username} grey is boring, go to seattle!`);
 //    break;
 //
 //  default:
 //    alert(`${username} come on pick a real color!`);
 // }

// const myFirstArray = ["MIke", 25, true, "Fresno",["Bam", "Dave", "Patti"]];
//
// console.log(myFirstArray[4][2]);
// const favMovie = "Batman";
// const me = [favMovie, 9, false, 2000,]; //can take in variables as well
// console.log(me);
// console.log(me.length);
// console.log(me[1]);

// const favMovie1 = ["Swiss Family", 1965];
// const favMovie2 = ["Tommy Boy", 1992];
// const favMovie3 = ["Indiana Jones", 1989];
// const favMovie4 = ["Rocky", 1985];
// const favMovie5 = ["Matrix", 2017];
//
// const movieArray = [favMovie1, favMovie2, favMovie3, favMovie4, favMovie5];
// // alert(movieArray);
// // const favMovieTitle = [favMovie1[0],favMovie2[0],favMovie3[0],favMovie4[0],favMovie5[0]];
// // let favHateArray = movieArray.slice[2];
// // favHateArray.push(movieArray.slice[3][0]);
// // console.log(favHateArray);
// // console.log(movieArray.length);
// for(let i =0; i < movieArray.length; i++){
//   if(movieArray[i][0] === "Rocky"){
//     alert(movieArray[i]);
//     break;
//   }
// }
//
// for(movie of movieArray){
//
//   if(movie[0] === "Indiana Jones"){
//     alert(movie);
//   }
// }
// for(let i = 0; i <= 10; i++){
//   console.log(i);
// }

// const names = ["Andy", "Adam", "Allan", "Alex"];
// for(let i = 0; i< names.length; i++){
//   console.log(names[i]);
// }
//
// const albums = ["One", "22", "23"];
// for(let i = 0; i < albums.length;i++){
//   console.log(albums[i]);
// }

// for(let name of names){
//   console.log(name);
// }

// names.forEach(name => console.log(name));
//
// names.map(name => console.log(name));
//
// for(let album of albums) {
//   console.log(album);
//   if(album === "22"){
//     break;
//   }
// }
//
// const person = {
//   name: "Mike",
//   age: 36
// }
//
// for( let key in person) {
//   console.log(person[key]);
// }
// // don't use this very much
//
// console.log(person.name);
//
// const user = {};
// console.log(user);
// user.name = prompt('Give me your name');
// user.age = +prompt('Give me your age');
//
// console.log(user);
// console.log(user.name);

const taskList = [];

function addTask(){
  const task = {};
  task.item = prompt("What do you need to do this week?");
  task.time = +prompt("How many hours does it take?");
  taskList.push(task);
}
addTask();
addTask();
addTask();

// for(let i = 0; i < taskList.length; i++){
//   taskList[i].time = +prompt(`How many hours does it take to ${taskList[i]}`);
// }
// console.log(taskList);
//
// console.log(taskList[1]);
// console.log(taskList[1].time);
let counter = 0;
let lrgTime = 0;
let longItem = "";
while (counter < taskList.length){
  if(lrgTime < taskList[counter].time){
    lrgTime = taskList[counter].time;
    longItem = taskList[counter].item;
  }
  counter ++;
}
console.log(longItem);
let easyArray = [];
for (let i = 0; i < taskList.length; i++){
  if (taskList[i].time !== lrgTime){
    taskList[i].str = "easy-peasy";
    easyArray.push(taskList[i].item);
  }
}
// console.log(taskList);
alert(easyArray);
