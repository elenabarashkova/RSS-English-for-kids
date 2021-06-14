import { postNewCar } from "../../../services/service-car";

export const createCarFormRender = ({createCarName = '', createCarColor = ''}: GarageFormsConfig): string => (`
  <form id="createNewCar">
    <input type="text" id="newCarName" required value="${createCarName}">
    <input type="color" id="newCarColor" value="${createCarColor}">
    <button id="createCarBtn" type="submit">Create</button>
  </form>
`)

export const createCarFormBehavior = (): void => {
  const newCarName = document.getElementById('newCarName') as HTMLInputElement;
  const newCarColor = document.getElementById('newCarColor') as HTMLInputElement;
  const createNewCarForm = document.getElementById('createNewCar') as HTMLFormElement;

  createNewCarForm?.addEventListener('submit',  (event: Event) => {
    event.preventDefault();

    const newCar = {
      name: newCarName.value,
      color: newCarColor.value,
    };

    postNewCar(newCar);

    newCarName.value = '';
    newCarColor.value = '';
  });
}

export const getCreateCarFormData = (): GarageFormsConfig => (
  {
    createCarName: (document.getElementById('newCarName') as HTMLInputElement).value,
    createCarColor: (document.getElementById('newCarColor') as HTMLInputElement).value,
  }
);