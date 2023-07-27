// Remember to import the data and Dog class!

"use strict";

import Dog from "./Dog.js";
import { dogs } from "./data.js";

// import { addNopeHtml, addYesHtml, nopeEl,
// yesEl } from "./utils.js";
const heart = document.getElementById("heart");
const cross = document.getElementById("cross");
const mainPicture = document.querySelector(".main-picture");
const nopeEl = document.getElementById("nope");
const yesEl = document.getElementById("yes");
console.log(mainPicture);

const dog = new Dog(nextDog());
dog.getDogHTML();

function nextDog() {
  const next = dogs.shift();
  dogs.push(next);
  return next;
}
console.log(yesEl, nopeEl);
console.log(yesEl.classList.contains("hidden"));
// window.addEventListener("onload", dog.getDogHTML);

cross.addEventListener("click", function () {
  console.log(nopeEl.classList.contains("hidden"));
  if (nopeEl.classList.contains("hidden")) {
    
    nopeEl.classList.remove("hidden");
    console.log(nopeEl.classList.contains("hidden"));
  }
  dog.hasBeenSwiped = true;
  const next = new Dog(nextDog());

  setTimeout(()=>{next.getDogHTML()}, 1000);
  setTimeout(() => {
    nopeEl.classList.add("hidden");
  }, 1000);
});

heart.addEventListener("click", function () {
  console.log(yesEl.classList.contains("hidden"));
  if (yesEl.classList.contains("hidden")) {
    yesEl.classList.remove("hidden");
    console.log(yesEl.classList.contains("hidden"));
  }
  dog.hasBeenLiked = true;
  dog.hasBeenSwiped = true;
  const next = new Dog(nextDog());
  setTimeout(
    ()=>{next.getDogHTML()},

    1000
  );
  setTimeout(() => {
    yesEl.classList.add("hidden");
  }, 1000);
});

// cross.addEventListener("click", function () {
//   // showNope()
//   // console.log(nopeElement)
//   console.log(nopeEl.classList);

//   nopeEl.classList.remove("hide");

//   setTimeout(dog.dogHtml(), 1000);
//   nopeEl.classList.add("hide");
// });
// heart.addEventListener("click", function (e) {

//   yesEl.classList.remove("hide");
//   setTimeout(dog.dogHtml(), 1000);
//   yesEl.classList.add("hide");

// });

// function addNopeHtml() {
//   const nopeHTML = `<img
//             src="./images/badge-nope.png"
//             alt="a red square with word nope"
//             id="nope-img"

//           />`;
//   return nopeHTML;
//   // nopeEl.innerHTML = nopeHTML
// }

// function addYesHtml() {
//   const yesHTML = `<img

//    id="yes-img"
//    src="./images/badge-like.png"
//    alt="a red square with word nope"

//  />`;
//   return yesHTML;
//   //  yesEl.innerHTML = yesHTML
// }
