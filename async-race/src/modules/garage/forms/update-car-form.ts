import { updateCar } from "../../../services/service-car";

export const updateCarFormRender = ({updateCarName = '', updateCarColor = ''}: GarageFormsConfig):string => (`
  <form id="updateCarForm">
    <input type="text" id="updateCarName" value="${updateCarName}" ${updateCarName ? '' : 'disabled'}>
    <input type="color" id="updateCarColor" value="${updateCarColor}" ${updateCarColor ? '' : 'disabled'}>
    <button id="updateCarBtn" type="submit" ${updateCarName && updateCarColor ? '' : 'disabled'}>Update</button>
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

    updateCarName.value = '';
    updateCarColor.value = '';

    [...updateCarForm.children].forEach((elem) => elem.setAttribute('disabled', ''));
  });
}

export const getUpdateCarFormData = (): GarageFormsConfig => (
  {
    updateCarName: (document.getElementById('updateCarName') as HTMLInputElement).value,
    updateCarColor: (document.getElementById('updateCarColor') as HTMLInputElement).value,
  }
);