import { createCarFormRender } from "./forms/create-car-form";
import { updateCarFormRender } from "./forms/update-car-form";

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