"use strict";
const nopeElement = document.getElementById("nope");
const yesElement = document.getElementById("yes");



function renderYesorNopeHTML(element) {
  if (element === yesElement) {
    console.log("Rendering YES HTML");
    const yesHTML = `<img
      class="yes-img"
      src="./images/badge-like.png"
      alt="a red square with word nope"
    />`;
    return yesHTML;
  } else if (element === nopeElement) {
    console.log("Rendering NOPE HTML");
    const nopeHTML = `<img class="nope-img" src="./images/badge-nope.png"
      alt="a red square with word nope"/>`;
    return nopeHTML;
  } else {
    console.log("No matching element found!");
    return null;
  }
}

export { renderYesorNopeHTML, yesElement, nopeElement };


// function removeOrAddHiddenClass(e, element) {
//   e.preventDefault();
//   if (element.classList.contains("hidden")) {
//   element.classList.remove("hidden");}

//    else {
//     element.classList.add("hidden");

// }}
// function renderYesorNopeHTML( element) {
//   if (element === yesElement) {
//     console.log("Rendering YES HTML");
//     const yesHTML = `<img
//   class="yes-img"
//   src="./images/badge-like.png"
//   alt="a red square with word nope"
// /> `;
//     return yesHTML;
//   } else if (element === nopeElement) {
//     console.log("Rendering NOPE HTML");
//     const nopeHTML = `<img class="nope-img"src="./images/badge-nope.png"
//   alt="a red square with word nope"/>`;
//     return nopeHTML;
//   } else {
//     console.log("No matching element found!");
//     return null;}
// }

