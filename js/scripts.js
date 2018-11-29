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

const button = document.querySelector("#button");
button.addEventListener("click", ()=> {
  const titleText = prompt("Enter a title");
  const title = document.createElement('h1');

  title.textContent = titleText;
  title.className = "col-md-6 offset-md-4";
  title.className = "text-center";
  document.body.appendChild(title);
})
const pText = prompt("Write a few sentences");
const p = document.createElement('p');
p.className = "text-justify";
p.textContent = pText;
document.body.appendChild(p);



const input = document.querySelector("#input");
input.addEventListener("change", ()=>{
    p.style.background = input.value;
})
