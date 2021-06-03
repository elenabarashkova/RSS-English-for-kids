export const updateCarFormRender = ():string => (`
  <form id="updateCarForm">
    <input type="text" name="updateCar" id="updateCar">
    <input type="color" name="updateCarColor" id="updateCarColor">
    <button id="submitUpdateCar" type="submit">Update</button>
  </form>
`)

// updateCarFormBehavior