// Remember to import the data and Dog class!

"use strict";

import { dogs } from "./data.js";
import Dog from "./Dog.js";

const heart = document.getElementById("heart");
const cross = document.getElementById("cross");
const mainPicture = document.querySelector(".main-picture");

const dog = new Dog();
dog.dogHtml();

cross.addEventListener("click", function (e) {
  e.preventDefault();

  const nopeElement = document.getElementById("nope");
  console.log("Cross button clicked!");

  console.log(nopeElement);
  nopeElement.classList.remove("hidden");
  setTimeout(() => {
    dog.dogHtml();
  }, 2000);
});

heart.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("Heart button clicked!");
  const yesElement = document.getElementById("yes");

  yesElement.classList.toggle("hidden");

  setTimeout(() => {
    dog.dogHtml();
  }, 2000);
});
