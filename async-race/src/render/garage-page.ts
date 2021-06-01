import { renderCar } from "./car";


export const renderGaragePage = () => {
  const html = (`
    <div id="garagePage" class="Garage">
      <div class="form-area">
        <form action="#" id="createCarForm">
          <input type="text" name="createCar" id="createCar">
          <input type="color" name="createCarColor" id="createCarColor">
          <button id="submitCreateCar" type="submit">Create</button>
        </form>
        <form action="#" id="updateCarForm">
          <input type="text" name="updateCar" id="updateCar">
          <input type="color" name="updateCarColor" id="updateCarColor">
          <button id="submitUpdateCar" type="submit">Update</button>
        </form>
        <div class="buttons">
          <button id="raceBtn">Race</button>
          <button id="resetBtn">Reset</button>
          <button id="generateCarsBtn">Generate Cars</button>
        </div>
      </div>
      <div class="garage-area">
        <h2>Garage (Number)</h2>
        <div class="page-number">Page Number</div>
        <div class="garage-area-inner">${renderCar()}</div>
      </div>
    </div>
  `);

  document.body.insertAdjacentHTML('beforeend', html);
}

export const removeGaragePage = () => {
  const garagePage = document.getElementById('garagePage');
  garagePage?.remove();
}