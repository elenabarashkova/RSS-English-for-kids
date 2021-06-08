import { updateCar } from "../../../services/service-requests";

export const updateCarFormRender = ():string => (`
  <form id="updateCarForm">
    <input type="text" id="updateCarName" disabled>
    <input type="color" id="updateCarColor" disabled>
    <button id="updateCarBtn" type="submit" disabled>Update</button>
  </form>
`)

export const updateCarFormBehavior = ():void => {
  const updateCarForm = document.getElementById('updateCarForm') as HTMLFormElement;
  const updateCarName = document.getElementById('updateCarName') as HTMLInputElement;
  const updateCarColor = document.getElementById('updateCarColor') as HTMLInputElement;

  updateCarForm?.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const updatedCar = {
      name: updateCarName.value,
      color: updateCarColor.value,
    }

    updateCar(updatedCar);

    updateCarForm.reset();
    [...updateCarForm.children].forEach((elem) => elem.setAttribute('disabled', ''));
  });
}