todoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-card")) {
    const listItem = event.target.closest(".todo-list__item");
    if (listItem) {
      listItem.remove();

      let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
      const index = todoItems.indexOf(
        listItem.querySelector(".todo-list__text").textContent
      );
      if (index > -1) {
        todoItems.splice(index, 1);
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
      }
    }
  }
});
