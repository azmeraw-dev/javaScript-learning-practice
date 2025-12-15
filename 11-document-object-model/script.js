// 1. Change title text to your name
document.getElementById("title").textContent = "Azmeraw’s Page";
// 2. Change paragraph color to green
 document.querySelector(".desc").style.color = "green";
 // 3. Add new item “Milk” to the list
 const newItem = document.createElement("li");
 newItem.textContent = "Milk";
 document.getElementById("list").appendChild(newItem);
  // 4. Remove the first item (Coffee)
 document.querySelector(".item").remove();
// 5. On button click → change title to “Clicked!”
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("title").textContent = "Clicked!";
});
// button click
document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});



 