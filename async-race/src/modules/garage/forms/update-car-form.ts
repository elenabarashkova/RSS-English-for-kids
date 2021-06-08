import { updateCar1 } from "../../../services/service-requests";

export const updateCarFormRender = ():string => (`
  <form id="updateCarForm">
    <input type="text" id="updateCarName" disabled>
    <input type="color" id="updateCarColor" disabled>
    <button id="updateCarBtn" type="submit" disabled>Update</button>
  </form>
`)

export const updateCarFormBehavior = (targetCar: HTMLElement, targetCarItemId:number):void => {
  const updateCarName = document.getElementById('updateCarName') as HTMLInputElement;
  const updateCarColor = document.getElementById('updateCarColor') as HTMLInputElement;
  const updateCarForm = document.getElementById('updateCarForm') as HTMLFormElement;

  [...updateCarForm.children].forEach((elem) => elem.removeAttribute('disabled'));

  updateCarName.value = targetCar.dataset.name as string;
  updateCarColor.value = targetCar.dataset.color as string;

  const updateCarHandler = (event: Event) => {
    event.preventDefault();

    const updatedCar = {
      name: updateCarName.value,
      color: updateCarColor.value,
      id: targetCarItemId,
    }

    updateCar1(targetCarItemId, updatedCar);

    updateCarForm.reset();
    updateCarForm?.removeEventListener('submit', updateCarHandler);
  }

  updateCarForm?.addEventListener('submit', updateCarHandler);
}