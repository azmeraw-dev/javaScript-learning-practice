// 1️⃣ Live Input Display

document.getElementById("liveInput").addEventListener("keyup", (e) => {
  document.getElementById("liveText").textContent = e.target.value;
});
// 2️⃣ Character Counter

const textField = document.getElementById("textCount");
const count = document.getElementById("count");
textField.addEventListener("keyup", () => {
  count.textContent = textField.value.length;
});

// 3️⃣ Dark Mode Toggle

document.getElementById("darkBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 4️⃣ Background Color Switcher

const colors = document.querySelectorAll(".color-box");

colors.forEach((box) => {
  box.addEventListener("click", () => {
    const selectedColor = box.getAttribute("data-color");
    document.body.style.background = selectedColor;
  });
});

// 5️⃣ Simple Form Validation

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("formMsg");

  if (email === "" || password === "") {
    msg.textContent = "All fields are required!";
  } else {
    msg.style.color = "green";
    msg.textContent = "Form submitted successfully!";
  }
});