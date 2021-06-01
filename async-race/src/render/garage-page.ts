
export const renderGaragePage = () => {
  const html = (`
    <div id="garagePage" class="Garage">
      <div class="form-area">
        <form id="createNewCar">
          <input type="text" id="newCarName" required>
          <input type="color" id="newCarColor">
          <button id="createCarBtn" type="submit">Create</button>
        </form>
        <form id="updateCarForm">
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
        <div id="carsList" class="garage-area-inner"></div>
      </div>
    </div>
  `);

  document.body.insertAdjacentHTML('beforeend', html);
}

export const removeGaragePage = () => {
  const garagePage = document.getElementById('garagePage');
  garagePage?.remove();
}