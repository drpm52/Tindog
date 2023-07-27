"use strict";
const mainPicture =document.querySelector(".main-picture")
  ""
import { dogs } from "./data.js";
class Dog {
  constructor(dog) {
    Object.assign(this, dog);
  }

  nextDog() {
    const newDog =  dogs.shift() 
    dogs.push(newDog);
    return newDog;
  }

  dogHtml() {
    const next = new Dog(this.nextDog());
    const nextdogHtml = `
    <h2 class="name-age">
      ${next.name}, ${next.age}
    </h2>
    <p class="dog-message">${next.bio}</p>
  `;
   
      mainPicture.style.backgroundImage = `url(${next.avatar})`;
      document.querySelector( ".main-picture").innerHTML = 
      nextdogHtml;
    } 
   
 
}

export default Dog;
