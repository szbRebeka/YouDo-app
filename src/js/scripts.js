//can be deleted
console.log("Console log works!");
let youDoFrom = document.querySelector(".youDo-form");
let createBtn = document.querySelector(".create-btn");

createBtn.addEventListener("click", () => {
    let newToDoText = document.querySelector("#write-todo");
    console.log(newToDoText.value);
    youDoFrom.reset();
})
   // newToDo.classList.add("newToDoStyle");
   // ul.append(newToDo);