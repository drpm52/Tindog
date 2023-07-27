// Remember to import the data and Dog class!

"use strict";


import Dog from "./Dog.js";
import { removeOrAddHiddenClass, yesElement, nopeElement } from "./utils.js";
const heart = document.getElementById("heart");
const cross = document.getElementById("cross");

const dog = new Dog();

window.addEventListener("load", ()=>{
  e.preventDefault();
  dog.dogHtml()
  // nopeElement.classList.add("hidden")
  // yesElement.classList.add("hidden")
  // console.log(nopeElement.classList.contains("hidden"));
  // console.log(nopeElement.classList.contains("hidden"));

}
  );


cross.addEventListener("click", function (e) {
  e.preventDefault()
  console.log(nopeElement.classList.contains("hidden"));
  removeOrAddHiddenClass(e, nopeElement);
  setTimeout(dog.dogHtml(), 1000);
  removeOrAddHiddenClass(e, nopeElement)
  console.log(nopeElement.classList.contains("hidden"));
});


heart.addEventListener("click", function (e) {
  e.preventDefault()
  // console.log(yesElement.classList.contains("hidden"));
    removeOrAddHiddenClass(e, yesElement)
  setTimeout(dog.dogHtml(), 1000);
  removeOrAddHiddenClass(e, yesElement)
  // console.log(yesElement.classList.contains("hidden"));
});
