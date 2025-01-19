const addModal = {
  open: document.querySelector(".add-card"),
  close: document.querySelector(".add-modal__close"),
  backdrop: document.querySelector(".backdrop-add"),
};
const hiddenToggle = function () {
  addModal.backdrop.classList.toggle("is-hidden");
};
addModal.open.addEventListener("click", hiddenToggle);
addModal.close.addEventListener("click", hiddenToggle);

const todoList = document.querySelector(".todo-list");
const addCard = document.querySelector("#finalAdd");
const addToListCard = document.querySelector("#addModalCard");

addCard.addEventListener("click", function () {
  const addText = addToListCard.value.trim();

  if (addText === "") {
    alert("Please enter a valid task!");
    return;
  } else {
    let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

    todoItems.push(addText);

    localStorage.setItem("todoItems", JSON.stringify(todoItems));

    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todo-list__item">
        <p class="todo-list__text">${addText}</p>
        <div class="todo-list__overlay">
          <button class="delete-card" id="delete-card">-</button>
        </div>
      </li>`
    );

    hiddenToggle();

    addToListCard.value = "";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

  todoItems.forEach(function (item) {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todo-list__item">
        <p class="todo-list__text">${item}</p>
        <div class="todo-list__overlay">
          <button class="delete-card" id="delete-card">-</button>
        </div>
      </li>`
    );
  });
});
