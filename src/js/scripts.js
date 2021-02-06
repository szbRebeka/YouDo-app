//can be deleted
console.log("Console log works!");
//variables for the form
let youDoFrom = document.querySelector(".youDo-form");
//let createBtn = document.querySelector(".create-btn");

//creating ul for future items
let youDoList = document.createElement("ul");
document.body.appendChild(youDoList);
youDoList.classList.add("todos");

//list item template
let newToDoText = document.querySelector("#write-todo");
newToDoText.classList.add("todo");
//let toDoTemplate = `<li> <span>${newToDoText.value}</span><button>delete</button></li>`;

//function the new todo item

let addToDoTemplate = () => {
    let todoContent = `<li><span>${youDoFrom.newinput.value}</span><button class="delete">delete</button></li>`;
    youDoList.innerHTML += todoContent
};

//add new items to ul
youDoFrom.addEventListener("submit", e => {
    console.log(youDoFrom.newinput.value); //delete later
    e.preventDefault();
    addToDoTemplate();
    //listFrame.append(newToDoText.value)might use later
    youDoFrom.reset();
});

//deleting list items
youDoList.addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove()
    }
});
// Validating the input

youDoFrom.newinput.addEventListener("keyup", e => {
    console.log("keyup", e.target.value);
    if (e.target.value.length >= 6) {
        e.target.classList.add("input-valid");
        e.target.classList.remove("input-non-valid");
    } else {
        e.target.classList.add("input-non-valid");
        e.target.classList.remove("input-valid");
    }
});
//Restricting submissions

