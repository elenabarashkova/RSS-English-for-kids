import { carBtnsClasses } from "./constants";

const carIcon = require("../../../assets/car-icon.svg");
const finishIcon = require("../../../assets/finish-icon.png")

export const renderCar = ({name, color, id}:Car):string => (`
  <div id=${id} class="car-item">
    <div class="car-header">
      <button class=${carBtnsClasses.carSelect}>Select</button>
      <button class=${carBtnsClasses.carRemove}>Remove</button>
      <h4 class="car-name">${name}</h4>
    </div>
    <div class="car-field">
      <div class="car-navigation">
        <button class=${carBtnsClasses.carNavA}>A</button>
        <button class=${carBtnsClasses.carNavB}>B</button>
      </div>
      <div class="car" style="color: ${color}">
        ${carIcon}
      </div>
      <div class="finish-line">
        <img src="${finishIcon}" alt="finish-line">
      </div>
    </div>
  </div>
`);