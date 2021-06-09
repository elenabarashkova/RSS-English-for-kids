import { createCarFormRender } from "./forms/create-car-form";
import { updateCarFormRender } from "./forms/update-car-form";
import { renderCar } from "./car/render";

export const renderGaragePage = ():void => {
  const html = (`
    <div id="garagePage" class="Garage">
      <div class="form-area">
        ${createCarFormRender()}
        ${updateCarFormRender()}
        <div class="buttons">
          <button id="raceBtn">Race</button>
          <button id="resetBtn">Reset</button>
          <button id="generateCarsBtn">Generate Cars</button>
        </div>
      </div>
      <div class="garage-area">
        <h2>Garage (<span id="garageLength"></span>)</h2>
        <div class="page-number">Page Number</div>
        <div id="carsList" class="garage-area-inner"></div>
        <button id="prevPage">Previous</button>
        <button id="nextPage">Next</button>
      </div>
    </div>
  `);

  document.getElementById('main')?.insertAdjacentHTML('beforeend', html);
}

export const renderCarsList = (carsList: CarsList):void => {
  const carsListElement = document.getElementById('carsList');

  if(carsListElement) {
    carsListElement.innerHTML = '';
  }

  carsList.forEach((car: Car) => carsListElement?.insertAdjacentHTML('beforeend', renderCar(car)));
}

export const insertCarsCount = (carsListLength: number):void => {
  const garageLength = document.getElementById('garageLength');

  if(garageLength) {
    garageLength.innerText = `${carsListLength}`;
  }
}