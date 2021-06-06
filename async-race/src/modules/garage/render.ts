import { createCarFormRender } from "./forms/create-car-form";
import { updateCarFormRender } from "./forms/update-car-form";
import { renderCar } from "./car/car";

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
        <h2>Garage (Number)</h2>
        <div class="page-number">Page Number</div>
        <div id="carsList" class="garage-area-inner"></div>
      </div>
    </div>
  `);

  document.getElementById('main')?.insertAdjacentHTML('beforeend', html);
}

export const renderCarsList = (carsList: Array<Car>):void => {
  const carsListElement = document.getElementById('carsList');

  if(carsListElement) {
    carsListElement.innerHTML = '';
  }

  carsList.forEach((car: Car) => carsListElement?.insertAdjacentHTML('beforeend', renderCar(car)));
}