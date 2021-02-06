let youDoFrom = document.querySelector(".youDo-form");

//creating ul for future items
let youDoList = document.createElement("ul");
document.body.appendChild(youDoList);
youDoList.classList.add("todos");


//function to create template
let addToDoTemplate = () => {
    let todoContent = `<li><span class="todoText">${youDoFrom.newinput.value}</span><button class="delete">delete</button></li>`;
    youDoList.innerHTML += todoContent;
    //saving to local storage
    localStorage.setItem("task", youDoFrom.newinput.value);
};

//add new items to ul
youDoFrom.addEventListener("submit", e => {
    e.preventDefault();
    addToDoTemplate();
    youDoFrom.reset();
});

//deleting list items
youDoList.addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});
// Validating the input
youDoFrom.newinput.addEventListener("keyup", e => {
    if (e.target.value.length >= 6) {
        e.target.classList.add("input-valid");
        e.target.classList.remove("input-non-valid");
        //Restricting submissions
        youDoFrom.submit.disabled = false;
    } else if (e.target.value.length === 0) {
        e.target.classList.remove("input-valid");
    } else {
        e.target.classList.add("input-non-valid");
        e.target.classList.remove("input-valid");
    }
});











