"use strict";
const mainPicture = document.querySelector(".main-picture");
("");
import { dogs } from "./data.js";
class Dog {
  constructor(dog) {
    Object.assign(this, dog);
  }

  nextDog() {
    const newDog = dogs.shift();
    dogs.push(newDog);
    return newDog;
  }

  dogHtml() {
    const next = new Dog(this.nextDog());
    //
    const nextdogHtml = `<div  id="nope" class="hidden">
 <img
  class="nope-img"
  src="./images/badge-nope.png"
  alt="a red square with word no" >
  </div>
<div id="yes" class="hidden" > 
<img
  class="yes-img"
  src="./images/badge-like.png"
  alt="a green square with the word nope"
> 
 </div>
 <h2 class="name-age"> ${next.name}, ${next.age}</h2>
<p class="dog-message">${next.bio}</p>
   `;
    mainPicture.style.backgroundImage = `url(${next.avatar})`;
    mainPicture.innerHTML = nextdogHtml;
  }
}

export default Dog;
