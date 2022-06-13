const buton = document.querySelector(".buton");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");

// ! dikkat et tamam mı ?
let todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log('todos');
renderSavedTodos();

function renderSavedTodos() {
  todos.forEach((todo) => {
    createListElement(todo);
  });
}
    
function createListElement(todo){
  const {id,content,isDone}=todo;
  ul.innerHTML +=
   `<li id=${id} class = ${isDone ? 'checked' : ''}> 
      <i class="fa-solid fa-check"></i></button>
      <p>${content}</p>
      <i class="fa-solid fa-trash"></i></button>
    </li>`;
}

window.onload = function () {
  input.focus();
};
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    buton.click();
  }
});










// ! capturing method

buton.addEventListener("click", (e) => {
  if (!input.value) {
    alert("Lütfen bir bilgi giriniz");
  } else {
    const liste = {
      id: new Date().getTime(),
      İsDone: false,
      content: input.value,
    };
    todos.push(liste);
    localStorage.setItem("todos", JSON.stringify("todos"));
    createListElement(liste);
    todoInput.value ='';
   
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-check")) {
    if (e.target.parentElement.classList.contains("ekle")) {
      e.target.parentElement.classList.remove("ekle");
    } else {
      e.target.parentElement.classList.add("ekle");
    }
  }
});
