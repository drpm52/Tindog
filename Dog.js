"use strict";

import { dogs } from "./data.js";
class Dog {
  constructor(dog) {
    Object.assign(this, dog);
  }

  nextDog() {
    const next = dogs.length > 0 ? dogs.shift() : "";
    return next;
  }

  dogHtml() {
    const next = new Dog(this.nextDog());
    const nextdogHtml = `
    <h2 class="name-age">
      ${next.name}, ${next.age}
    </h2>
    <p class="dog-message">How you doing?</p>
  `;
    if (next) {
      document.querySelector(
        ".main-picture"
      ).style.backgroundImage = `url(${next.avatar})`;
      document.querySelector( ".main-picture").innerHTML = 
      nextdogHtml;
    } else {
      document.querySelector(
        ".main-picture"
      ).innerHTML = `<h1 class="no-dogs">We ran out of dogs!😕</h1>`;
    }
  }
}

export default Dog;
