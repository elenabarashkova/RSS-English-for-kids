const carIcon = require("../../../assets/car-icon.svg");
const finishIcon = require("../../../assets/finish-icon.png")

export const renderCar = ({name, color, id}:Car):string => (`
  <div id=${id} class="car-item" data-name=${name} data-color=${color}>
    <div class="car-header">
      <button class='car-select' data-id=${id}>Select</button>
      <button class='car-remove' data-id=${id}>Remove</button>
      <h4 class="car-name">${name}</h4>
    </div>
    <div class="car-field">
      <div class="car-navigation">
        <button class='car-nav-a' data-id=${id}>A</button>
        <button class='car-nav-b' data-id=${id}>B</button>
      </div>
      <div class="car-field-inner">
        <div class="car" style="color: ${color}">
          ${carIcon}
        </div>
        <div class="finish-line">
          <img src="${finishIcon}" alt="finish-line">
        </div>
      </div>   
    </div>
  </div>
`);