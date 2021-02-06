//can be deleted
console.log("Console log works!");
//variables for the form
let youDoFrom = document.querySelector(".youDo-form");
let createBtn = document.querySelector(".create-btn");

//creating ul for future items
let listFrame = document.createElement("ul");
document.body.appendChild(listFrame);
listFrame.classList.add("todos");

//add new items to ul
createBtn.addEventListener("click", () => {
    let newToDoText = document.querySelector("#write-todo");
    console.log(newToDoText.value); //delete later
    newToDoText.classList.add("todo");
    listFrame.innerHTML += `<li>${newToDoText.value}</li>`
    //listFrame.append(newToDoText.value) might use later
    youDoFrom.reset();
});


