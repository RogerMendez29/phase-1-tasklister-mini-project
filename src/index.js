const form = document.getElementById("createTaskForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  handleToDo(e.target.newTaskDescription.value);
  form.reset();
});

function handleToDo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  p.textContent = `${todo}  `;
  p.appendChild(btn);
  document.querySelector("#tasks").appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
