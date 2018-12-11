// alert('Welcome to JS');
// const title = document.querySelector("#title");
//
// title.textcontent = "My title";
// // enters whatever you put into the text value of the element
// title.innerHTML = "<h1>My title</h1>";
// // enters what u put into your index.html page so you can pass it complex html
// const title = document.createElement('h1');
// title.textContent = "Our Title";
// // document.body.appendChild(title);
//
// const list = document.createElement("ul");
// // document.body.appendChild(list);
//
// const item1 = document.createElement('li');
// item1.textContent = "Mike";
// item1.dataset.id = 1;
//
// const item2 = document.createElement("li");
// item2.textContent = "Hello";
//
// list.append(item1, item2);
// // use this for multiple entries
// const js = document.querySelector('script');
//
// document.body.insertBefore(title, js );
// document.body.insertBefore(list, title);
//
// const button = document.createElement("button");
// button.textContent = "Submit";
// button.id = "my-button";
// button.className = 'btn btn-success';
// button.classList.replace('btn-success','btn-info')
// document.body.appendChild(button);
//
// title.classList.add('text-center');
//
// // button.classList.remove('btn-info');
//
// button.addEventListener("click", () => {
//   title.classList.toggle('hidden');
// });
//
// // button.setAttribute('disabled', true);
// // //to disable the button need key: value pair for setting it
// // button.removeAttribute('disabled');
// // // this would would remove the diasabled

// tag and thereby renable the button
// const header = document.createElement('header')
// header.className = "container-fluid";
// document.body.appendChild(header);
//
// const nav = document.createElement('nav');
// nav.className = "navbar navbar-default navbar-fixed-top";
// header.appendChild(nav);
//
// const containerFluid = document.createElement('div');
// containerFluid.className = "container-fluid";
// nav.appendChild(containerFluid);
//
// const navbar = document.createElement('div');
// // navbar.className = "collapse navbar-collapse";
// containerFluid.appendChild(navbar);
//
// const list = document.createElement('ul');
// // list.className = "nav navbar-nav navbar-right text-shadow";
// navbar.appendChild(list);
//
// const listOne = document.createElement("li");
// listOne.textContent = "Home";
// const listTwo = document.createElement("li");
// listTwo.textContent = "About";
// const listThree = document.createElement("li");
// listThree.textContent = "Contact";
//
// list.append(listOne,listTwo,listThree);




// const title = document.createElement('h1');
// title.textContent = "Hello World";
// title.className = "text-center";
// document.body.appendChild(title);
//
// const p = document.createElement("p");
// p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorem eveniet ea doloribus quis alias facilis molestias dolorum dolor iste sed qui amet, natus nostrum! Facilis fugiat saepe tempore aperiam?"
// p.className = "col-md-6 offset-md-3";
// document.body.appendChild(p);

// document.body.innerHTML = `
// <nav>
//   <a class="float-right" href='#'>HOme</a>
//   <a class="float-right" href ="#">ABout</a>
//   <a class="float-right" href ="#">contact</a>
// </nav>
// <h1 class = "text-center">Hello Wolrd</h1>
// <p class = "col-md-6 offset-md-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorem eveniet ea doloribus quis alias facilis molestias dolorum dolor iste sed qui amet, natus nostrum! Facilis fugiat saepe tempore aperiam?</p>
// `;

// FizzBuzz

// loop between 2 numbers 0 to 100
// if multiple of 3 and 5 log fizzbuzz
// if the number is multiple of 3 aka modulo 3
// if number is multiple of 5 log Buzz
// if neither log the number


// const script = document.querySelector('script');
//
// function fizzBuzz(min,max){
//     for(let i = min; i < max +1; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//       createItem(i, 'fizzbuzz');
//     }else if(i%3 === 0){
//       createItem(i, "fuzz");
//     }else if(i%5 === 0){
//       createItem(i, 'buzz');
//     }else{
//       createItem(i);
//     }
//   }
// };
//
// function createItem(i, str){
//   const p = document.createElement('p');
//   str ? p.textContent = `${i} ${str}` : p.textContent = i;
//   document.body.appendChild(p);
// }
//
//
// fizzBuzz(0,100);

// const button = document.querySelector("#button");
// button.addEventListener("click", ()=> {
//   const titleText = prompt("Enter a title");
//   const title = document.createElement('h1');
//
//   title.textContent = titleText;
//   title.className = "col-md-6 offset-md-4";
//   title.className = "text-center";
//   document.body.appendChild(title);
// })
// const pText = prompt("Write a few sentences");
// const p = document.createElement('p');
// p.className = "text-justify";
// p.textContent = pText;
// document.body.appendChild(p);
//
//
//
// const input = document.querySelector("#input");
// input.addEventListener("change", ()=>{
//     p.style.background = input.value;
// })

// console.log(document.forms.loginForm.button);
//
// const btn = document.forms.loginForm.button;
//
// btn.addEventListener('click', e =>{
//   let firstName = document.forms.loginForm.firstName;
//   e.preventDefault();
//   console.log(firstName.value);
//   console.log('clicked');
//   firstName.value = "";
// })


// javascript this**
// const person = {
//   firstName: 'Mike',
//   lastName:'Ward',
//   age: 36,
//   wife: {
//     firstName: 'Brit',
//     lastName:'Ward',
//     age:29,
//     howOld(){
//       console.log(`${this.firstName} ${this.lastName} is:${this.age} years old`);
//     }
//   },
//   howOld(){
//     console.log(`${this.firstName} ${this.lastName} is:${this.age} years old`);
//   }
// }
//
//
// person.howOld();
// person.wife.howOld();
//
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', logThis);
// btn2.addEventListener('click', logThis);
//
// function logThis(){
//   console.log(this);
// };

// btn1.addEventListener('click', function(){
//   console.log(this);
// });
// btn1.addEventListener('click', ()=>{
//   // this.parentElement.style.display='none';
//   console.log(this);
// })
//
// btn2.addEventListener('click', function(){
//   console.log(this);
// })

// const buttons = document.querySelectorAll('button');
// console.log('buttons', buttons);

// buttons.forEach(button => button.addEventListener('click', function() {
//   this.style.display = 'none';
// }));

// for(button of buttons){
//   button.addEventListener('click', function() {
//     this.style.display = 'none';
//   });
// };
//
// const dog = {
//   name: "Kylee",
//   says: "WOof"
// }
//
// const cat = {
//   name: "Tash",
//   says: "meow"
// }
//
// const baldEagle = {
//   name: "Freedom",
//   says: "Baaakaaa"
// }
//
// // function speak(location, status) {
// //   alert(`${this.name} says: ${this.says} from ${location} and looks ${status}`);
// // }
// //
// // speak.call(dog, "The Yard", 'because it is hungry');
// // speak.apply(cat, ["the couch", "tired"]);
// // speak.call(baldEagle, "the epic mountainside", "majestic");
//
//
// function speak() {
//   alert(`${this.name} says: ${this.says}`);
// }
//
// const dogSays = speak.bind(dog);
// dogSays();
//
// const catSays = speak.bind(cat);
// catSays();
//
// const baldEagleSays = speak.bind(baldEagle);
// baldEagleSays();

// class Person {
//   constructor(name, age, favColor){
//     this.name = name;
//     this.age = age;
//     this.favColor = favColor;
//   }
//
//   sayName() {
//     console.log(this.name);
//   }
// }
//
// const ben = new Person("Ben", 25, "Pink");
// const david = new Person("David", 34, "Blue");
// ben.sayName();
// david.sayName();

// const str = new String('Ben');
// console.log(str);
//
// console.log(Object.getPrototypeOf(42));
//
// const arr = new Array('Ben', 35);
// console.log(arr);
//
// const num = new Number(42);
// console.log(num);
//
// const bool = new Boolean(true);
// console.log(bool);
//
// const person = {
//   name: "Billy Bob"
// }
//
// console.log(person);
//
// const dog = new Object();
// dog.name = "fido";
// console.log(dog);
//
// const num2 = 43;
// console.log(num2);


// the old way constructor function cpaital is common like String above
// function Animal(name, energy){
//   this.name = name;
//   this.energy = energy;
//
//   this.play = function() {
//     this.energy -= 5;
//   }
// }
//
// Animal.prototype.eat = function(){
//   this.energy += 10
// }
//
// const dog = new Animal('dog', 40);
// const cat = new Animal('Cat', 5);
//
// dog.fetch = function(){
//   this.energy += 10;
// }
//
//
// console.log(dog);
// console.log(dog.name);
// console.log(dog.energy);
// dog.play();
// console.log(dog.energy);
// dog.eat();
// console.log(dog.energy);
// console.log(cat);
// dog.fetch();
// console.log(dog.energy);
// function Todo(text, isDone) {
//   this.edit = function(){
//
//   }
// }

// // my way to do the assignment
// const User = function(username, password){
//   this.username = username;
//   this.password = password;
// }
//
// function newUser(){
//   const uname = prompt('what is your username');
//   const pword = prompt('what is your password');
//   const newUser = new User(uname, pword);
//   console.log(newUser);
// }
//
// newUser();



// // teaches way
//
//
// function User(){
//
//   this.getStuff = function(){
//     this.getName();
//     this.getPassword();
//   }
//   this.getName = function(){
//     this.name = prompt('n');
//   }
//   this.getPassword = function(){
//     this.password = prompt('p');
//   }
// }
//
// const ben = new User();
// ben.getStuff();
//
// console.log(ben);



// classes: New way to construct objects

// class AnimalNew {
//   constructor(name, energy){
//     this.name = name;
//     this.energy = energy;
//   }
//   play(){
//     this.energy -=5;
//   }
// }
//
// class Dog extends AnimalNew {
//   constructor(name, energy, says){
//     super(...arguments);
//     // this will call the other arguments from parent class just like
//     // this.name = name;
//     // this.energy = energy;
//
//     this.says = says;
//   }
//
//   speak(){
//     console.log(`Dog says ${this.says}`);
//   }
// }
//
// const fido = new Dog('fido', 40, 'woof');
// fido.play();
// console.log(fido);

// const newPrompt = +prompt("How much time would you like to wait in ms");
//
// const timer = setTimeout(quote, newPrompt);
// const intervalPrompt = +prompt('How many times do you want the message to appear');
// const setTime = setInterval(quote, intervalPrompt);
//
// function quote(){
//   const random = alert(Math.random().toString(27).substring(2,15));
// }
//
// function endQuote(){
//   clearTimeout(timer);
// }
//
// function myStopFunction(){
//   clearInterval(setTime);
// }

// const username = prompt('Enter your username');
// const password = prompt('What is your password');
//
// function mySetItem(){
//   localStorage.setItem('user', username);
//   localStorage.password = password;
// }
//
// function myGetItem() {
//   const userValue = alert(localStorage.getItem('user'));
// }
//
// function myClearItem() {
//   localStorage.removeItem('user');
// }

// function showMeClosure() {
//         var bestNumber = 42;
//
//         function proveClosureExists() {
//             console.log( bestNumber );
//         };
//
//         return proveClosureExists;
//     };
//
// var outsideScope = showMeClosure();
// // you have to set the function equal to a new variable in order to access the value in the funciton
//
// outsideScope();
//
// function someFn(name, age, ...otherArgs){
//   console.log(name);
//   console.log(arguments);
//   otherArgs.forEach(a => console.log(a));
// }
//
// someFn("Mike", 35, "Purple", true);
//
//
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
//
// //want to combine them together [1 ,2, 3, 4, 5, 6]
//
// console.log([...arr1, ...arr2]);
//
// //or you can inject them whaerever you want in an Array
//
// console.log(['Ben', 46, ...arr1, true, 'CAT', ...arr2, false]);
//
// // the ... allows you to grab everything from in an Array

//destructuring

// const todoList = ['Dishes', 'mow lawn', 'put up christmas tree'];
//
// console.log(todoList);
// //old way
// const firstItem = todoList[0];
// const secondItem = todoList[1];
//
// // destructuring way
// const [firstItem] = todoList;
// const [firstItem, ...theRest] = todoList;
// console.log(firstItem);
// console.log(theRest);

// const person = [
//   name : 'Mike',
//   age:36,
//   wife: {
//     name:'Brit',
//     age:29
//   }
// ]
//
// // const {name: banana = 'John Doe'} = person;
// // // looks for the ben in the object person and then the colon is if you want to rename the key
// // // it also can assign a default value if there if it doesn't find one
// // console.log(ben);
//
// //If you wanna get wifes Name
//
// const {name} = person.wife;
// console.log(name);

//JSON
//promises
// function getAllCharacters(url) {
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const pagination = data.info.next;
//     if (pagination){
//       getAllCharacters(pagination);
//     }
//     makeCard(data);
//   })
//   .catch(error => console.log(error));
// }

//async and await
async function getAllCharacters(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const pagination = data.info.next;
    if( pagination) {getAllCharacters(pagination)};
    makeCard(data);
  } catch (error) {
    console.log(error);
  }
}

getAllCharacters("https://rickandmortyapi.com/api/character/");

function makeCard(data) {
  // count characters = data.results
  const { results: characters} = data;
  characters.forEach(character => {
    const card = document.createElement('div');
    card.classLIst = 'card';
    card.innerHTML = `
      <img class = "card-img-top" src = "${character.image}">
      <div class = "card-body">
        <h2 class = "card-title">${character.name}</h2>
        <p class = "card-text">Species: ${character.species}</P>
        <p class = "card-text">Location: ${character.location.image}</P>

      </div>
    `;
    document.body.append(card);
  })
}
