let todo = "";
const todoField = document.querySelector("#todoField");
const sectionTag = document.querySelector("#section");
const ulTag = document.createElement("uL");
  var list = document.createElement("li");
var addTodoList = document.createElement( "todolist" );  



document.querySelector('#myInput').addEventListener("submit", function(event) {
 console.log("submitting the form");
  event.preventDefault();

            
    let template =
   `
    <li> ${todolist} </li>

   `;
   sectionTag.innerHTML = template;



   let todoDisplay = ''
   for(let i = 0; i < todo.length; i++) {
    
   }

   const rendertodoList = document.querySelector('#todolist');
   rendertodoList.textContent = todo

});

