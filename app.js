const ekle = document.querySelector(".btn");
const çiz = document.querySelector(".a");
const sil = document.querySelector(".b");
const input = document.querySelector(".input");
const div = document.createElement("div");
const satır = document.querySelector(".main2");
const main = document.querySelector(".main1");
const a = document.querySelector("p");


satır.appendChild(div);

// const b = ul.closest(".header").firstElementChild;
// b.style.width = "";

ekle.onclick = function () {
  if (!input.value) {
    alert("Lütfen bir bilgi giriniz");
  } else {
    div.innerHTML += `<div class="main1">
          <button class="a"><i class="fa-solid fa-check"></i></button>
          <p>${input.value}</p>
          <button class="b"><i class="fa-solid fa-trash"></i></button>
        </div>`;
        input.value = "";
        
        
      }
      // console.log(ul.childElementCount);
    };
    
    sil.onclick = function () {
        a.innerHTML =  `remove()`
    };
    çiz.onclick = function () {
        a.style.textDecoration = `line-through`
  
    };
    // çiz.onclick = function () {
//   ul.style.color = v`red`;
// };

// input.addEventListener("keydown", (e) => {
//   // console.log(e);
//   if (e.keyCode === 13) {
//     buton.onclick();
//   }
//   // if (e.code === 'Enter') {
//   //   ekleBtn.onclick();
//   // }
//   if (e.code === "Delete") {
//     sil.onclick();
//   }
// });
