import { postNewCar } from "../../../services/service-requests";

export const createCarFormRender = ():string => (`
  <form id="createNewCar">
    <input type="text" id="newCarName" required>
    <input type="color" id="newCarColor">
    <button id="createCarBtn" type="submit">Create</button>
  </form>
`)

export const createCarFormBehavior = ():void => {
  const newCarName = document.getElementById('newCarName') as HTMLInputElement;
  const newCarColor = document.getElementById('newCarColor') as HTMLInputElement;
  const createNewCarForm = document.getElementById('createNewCar') as HTMLFormElement;

  createNewCarForm?.addEventListener('submit', async (event: Event) => {
    event.preventDefault();

    const newCar = {
      name: newCarName.value,
      color: newCarColor.value,
    };

    postNewCar(newCar);

    createNewCarForm.reset();
  });
}