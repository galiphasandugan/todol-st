const input = document.querySelector("#input");
const buton = document.querySelector("i");
const a = document.querySelector(".a");
const sil = document.querySelector(".btn");
const çiz = document.querySelector(".btn1");

const ul = document.createElement("ul");
const input1 = document.createElement("input");

a.appendChild(ul);

const b = ul.closest(".header").firstElementChild;
b.style.width = "";

buton.onclick = function () {
  if (!input.value) {
    alert("Lütfen bir bilgi giriniz");
  } else {
    ul.innerHTML += ` <li>${input.value}</li>`;
    input.value = "";
  }
  console.log(ul.childElementCount);
};

sil.onclick = function () {
  if (ul.childElementCount > 0) {
    ul.removeChild(ul.lastElementChild);
  } else {
    alert("ailinecek dil kalmadı");
  }
};

çiz.onclick = function () {
  ul.style.color = v`red`;
};

input.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.keyCode === 13) {
    buton.onclick();
  }
  // if (e.code === 'Enter') {
  //   ekleBtn.onclick();
  // }
  if (e.code === "Delete") {
    sil.onclick();
  }
});
