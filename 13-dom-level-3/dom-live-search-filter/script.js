const searchInput = document.getElementById("searchInput");
const listItems = document.querySelectorAll("#list li");
searchInput.addEventListener("keyup", () => {
  const searchText = searchInput.value.toLowerCase();
  listItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});