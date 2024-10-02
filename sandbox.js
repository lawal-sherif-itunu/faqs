"use strct";

const button1 = document.querySelector(".questionOne-heading img");
const plus = document.querySelector(".plus");
const para1 = document.querySelector(".questionOne p");

button1.addEventListener("click", function () {
  if (para1.style.display === "none") {
    plus.src = "images/icon-plus.svg";
  } else if (para1.style.display === "block") {
    plus.src = "images/icon-minus.svg";
    para1.style.display = "block";
  }
  
});
