export { listClick, listChange };
const listClick = list.addEventListener("click", (event) => {
  let removeBtn = event.target.classList.contains("list-btn");
  if (removeBtn) {
    event.target.closest(".list-item").remove();
  }
});
const listChange = list.addEventListener("change", (event) => {
  let checkbox = event.target.classList.contains("todo-check");
  let listItem = event.target.closest(".list-item");
  if (checkbox) {
    let isDone = event.target.checked;
    event.target.disabled = isDone;
    listItem.querySelector(".list-btn").disabled = isDone;
    listItem.querySelector(".list-item-text").style.textDecoration =
      "line-through";
  }
});
