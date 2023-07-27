"use strict";
const nopeElement = document.querySelector(".nope");
const yesElement = document.querySelector(".yes");

function removeOrAddHiddenClass(e, element) {
  e.preventDefault();
  element.classList.remove("hidden")

  // if (element.classList.contains("hidden")) {
  //   element.classList.toggle("hidden");
  
  // } else {
  //   return;
  // }
}

export { removeOrAddHiddenClass, yesElement, nopeElement };
