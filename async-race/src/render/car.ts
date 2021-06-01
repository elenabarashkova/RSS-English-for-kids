const carIcon = require("../assets/car-icon.svg");
const finishIcon = require("../assets/finish-icon.png")

export const renderCar = ({name, color}:Car) => (`
  <div class="car-item">
    <div class="car-header">
      <button id="carSelect">Select</button>
      <button id="carRemove">Remove</button>
      <h4 id="carName">${name}</h4>
    </div>
    <div id="carField" class="car-field">
      <div class="car-navigation">
        <button id="carNavA">A</button>
        <button id="carNavB">B</button>
      </div>
      <div class="car" style="color: ${color}">
        ${carIcon}
      </div>
      <div id="finishLine" class="finish-line">
        <img src="${finishIcon}" alt="finish-line">
      </div>
    </div>
  </div>
`);