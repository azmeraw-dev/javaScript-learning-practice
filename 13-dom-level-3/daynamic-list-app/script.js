const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

// Add item
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return alert("Please type something");

  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `${text} <button class="delete-btn">Delete</button>`;

  list.appendChild(li);

  input.value = "";
});

// Delete item (Event Delegation)
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
