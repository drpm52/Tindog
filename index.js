// Remember to import the data and Dog class!

"use strict";

import {dogs} from "./data.js"
import Dog from "./Dog.js";
import { renderYesorNopeHTML, yesElement, nopeElement } from "./utils.js";
const heart = document.getElementById("heart");
const cross = document.getElementById("cross");
const mainPicture = document.querySelector('.main-picture')
const nopeImg = document.querySelector(".nope-img")
const yesImg = document.querySelector(".yes-img")

// console.log(nopeElement, yesElement);
const dog = new Dog();

// window.addEventListener("load", ()=>{
 
 
//   // nopeImg.classList.add("hidden")
//   // yesImg.classList.add("hidden")
//   mainPicture.innerHTML =`<h2 class="name-age">
//   ${dogs[0].name}, ${dogs[0].age}
// </h2>
// <p class="dog-message">${dogs[0].bio}</p>
// `
//   // console.log(nopeElement.classList.contains("hidden"));
//   // console.log(nopeElement.classList.contains("hidden"));

// }
//   );
  
// ... (other imports and code)

// ... (other imports and code)

// ... (other imports and code)



// ... (Other code)

cross.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Cross button clicked!");
  const nopeHTML = renderYesorNopeHTML(nopeElement);
  nopeElement.innerHTML = nopeHTML;
});

heart.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Heart button clicked!");
  const yesHTML = renderYesorNopeHTML(yesElement);
  yesElement.innerHTML = yesHTML;
});




// cross.addEventListener("click", function (e) {
//   // e.preventDefault()
//   console.log(renderYesorNopeHTML(e, nopeElement));
//   nopeElement.innerHTML =renderYesorNopeHTML(nopeElement)
//   // console.log(nopeElement);
//   // console.log(nopeImg.classList.contains("hidden"), 'nope-img: hidden');
 
//   // setTimeout(dog.dogHtml(), 1000);
//   dog.dogHtml();
//   // removeOrAddHiddenClass(e, nopeImg)
//   // console.log(nopeImg.classList.contains("hidden"), 'nope-img: hidden');
// });


// heart.addEventListener("click", function (e) {
//   e.preventDefault()
//   const nopeHTMLL= renderYesorNopeHTML(Element)
//     // removeOrAddHiddenClass(e, yesImg)
//   // setTimeout(dog.dogHtml(), 1000);
//   dog.dogHtml()
//   // removeOrAddHiddenClass(e, yesImg)
//   // console.log(yesImg.classList.contains("hidden"), 'yes-img:hidden');
// });
