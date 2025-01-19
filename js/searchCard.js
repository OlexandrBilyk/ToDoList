const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.trim().toLowerCase();
  const todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

  document.querySelectorAll(".todo-list__item").forEach((item) => {
    item.classList.remove("found");
  });

  if (searchText) {
    todoItems.forEach((itemText, index) => {
      if (itemText.toLowerCase().includes(searchText)) {
        const listItem = document.querySelectorAll(".todo-list__item")[index];
        listItem.classList.add("found");
      }
    });
  }
});
