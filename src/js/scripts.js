//can be deleted
console.log("Console log works!");
//variables for the form
let youDoFrom = document.querySelector(".youDo-form");
//let createBtn = document.querySelector(".create-btn");

//creating ul for future items
let listFrame = document.createElement("ul");
document.body.appendChild(listFrame);
listFrame.classList.add("todos");

//list item template
let newToDoText = document.querySelector("#write-todo");
newToDoText.classList.add("todo");
//let toDoTemplate = `<li> <span>${newToDoText.value}</span><button>delete</button></li>`;

//function the new todo item

let addToDoTemplate = () => {
    let todoContent = `<li><span>${youDoFrom.new.value}</span><button class="delete">delete</button></li>`;
    listFrame.innerHTML += todoContent
};

//add new items to ul
youDoFrom.addEventListener("submit", e => {
    console.log(youDoFrom.new.value); //delete later
    e.preventDefault();
    addToDoTemplate();
    //listFrame.append(newToDoText.value)might use later
    youDoFrom.reset();
});

//deleting list items
listFrame.addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove()
    }
});


