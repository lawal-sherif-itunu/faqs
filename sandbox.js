"use strct";

const plus = document.querySelector("img.plus");
const answer1 = document.querySelector(".questionOne-answer");
const ones = document.querySelectorAll(".one-remove");
const twos = document.querySelectorAll(".twos");
const answer2 = document.querySelector(".questionTwo-answer");
const plus2 = document.querySelector(".plus2");
const threes = document.querySelectorAll(".threes");
const answer3 = document.querySelector(".questionThree-answer");
const plus3 = document.querySelector(".plus3");
const fours = document.querySelectorAll(".fours");
const answer4 = document.querySelector(".questionFour-answer");
const plus4 = document.querySelector(".plus4");

ones.forEach(function (one) {
  one.addEventListener("click", function () {
    if (answer1.style.display === "none") {
      answer1.style.display = "block";
      plus.src = "images/icon-minus.svg";
    } else {
      answer1.style.display = "none";
      plus.src = "images/icon-plus.svg";
    }
  });
});

twos.forEach(function (two) {
  two.addEventListener("click", function () {
    if (answer2.style.display === "none") {
      answer2.style.display = "block";
      plus2.src = "images/icon-minus.svg";
    } else {
      answer2.style.display = "none";
      plus2.src = "images/icon-plus.svg";
    }
  });
});

threes.forEach(function (three) {
  three.addEventListener("click", function () {
    if (answer3.style.display === "none") {
      answer3.style.display = "block";
      plus3.src = "images/icon-minus.svg";
    } else {
      answer3.style.display = "none";
      plus3.src = "images/icon-plus.svg";
    }
  });
});

fours.forEach(function (four) {
  four.addEventListener("click", function () {
    if (answer4.style.display === "none") {
      answer4.style.display = "block";
      plus4.src = "images/icon-minus.svg";
    } else {
      answer4.style.display = "none";
      plus4.src = "images/icon-plus.svg";
    }
  });
});
