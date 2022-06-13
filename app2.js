const input = document.querySelector(".input");
const buton = document.querySelector(".buton");
const ul = document.querySelector(".ul");

window.addEventListener("load", () => {
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    buton.click();
  }
});

buton.addEventListener("click", () => {
  ul.innerHTML += `
        <li>
          <i class="fas fa-check"></i>
          <p>${input.value}</p>
          <i class="fas fa-trash"></i>
        </li>`;
  input.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-check"));
  if (e.target.parentElement.classList.contains("ekle")) {
    e.target.parentElement.classList.remove("ekle");
  } else {
    e.target.parentElement.classList.add("ekle");
  }
});
