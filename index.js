// Remember to import the data and Dog class!

"use strict";

import Dog from "./Dog.js";
import { removeHiddenClass, addHiddenClass } from "./utils.js";
const heart = document.getElementById("heart");
const cross = document.getElementById("cross");

const dog = new Dog();

window.addEventListener("onload", dog.dogHtml);
cross.addEventListener("click", function (e) {
  removeHiddenClass(e);
  setTimeout(dog.dogHtml(), 1000);
  addHiddenClass(e);
});
heart.addEventListener("click", function (e) {
    console.log(e.target.element)
  removeHiddenClass(e);
  setTimeout(dog.dogHtml(), 1000);
  addHiddenClass(e);
});
