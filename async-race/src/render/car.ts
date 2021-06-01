const carIcon = require("../assets/car-icon.svg");

export const renderCar = () => (`
  <div class="car-item">
    <div class="car-header">
      <button id="carSelect">Select</button>
      <button id="carRemove">Remove</button>
      <h4 id="carName">Name</h4>
    </div>
    <div id="carField" class="car-field">
      <div class="car-navigation">
        <button id="carNavA">A</button>
        <button id="carNavB">B</button>
      </div>
      <div class="car">
        ${carIcon}
      </div>
      <div id="finishLine" class="finish-line">
        <img src="./assets/finish-icon.png" alt="finish-line">
      </div>
    </div>
  </div>
`);