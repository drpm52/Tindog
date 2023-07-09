"use strict";
const nopeElement = document.querySelector(".nope");
const yesElement = document.querySelector(".yes");

function removeHiddenClass(e) {
  console.log(e.target.id)
  if (e.target.id === "cross" && nopeElement.classList.contains("hidden")) {
    nopeElement.classList.remove("hidden");
  } else if (
    e.target.id === "heart" &&
    yesElement.classList.contains("hidden")
  ) {
    yesElement.classList.remove("hidden");
  } else {
    return;
  }
}
function addHiddenClass() {
  !nopeElement.classList.contains("hidden")
    ? nopeElement.classList.add("hidden")
    : "";
  !yesElement.classList.contains("hidden")
    ? yesElement.classList.add("hidden")
    : "";
}
export { removeHiddenClass, addHiddenClass };
