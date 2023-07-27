"use strict";

import { dogs } from "./data.js";
class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogCard() {
    const { name, age, bio } = this;
    const dogCard = `<h2 class="name-age">
      ${name}, ${age}
    </h2>
    <p class="dog-message">${bio}</p>
  `;

    return dogCard;
  }
  getDogHTML() {
    const mainPicture = document.querySelector(".main-picture");
    mainPicture.innerHTML = this.getDogCard();
    mainPicture.style.background = `url(${this.avatar})`;
  }
}

export default Dog;
