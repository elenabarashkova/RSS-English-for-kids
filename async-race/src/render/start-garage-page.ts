import { createCar } from "../redux/actions";
import { renderCar } from "./car";

export const startGaragePage = (store: Store) => {
  const newCarName = document.getElementById('newCarName') as HTMLInputElement;
  const newCarColor = document.getElementById('newCarColor') as HTMLInputElement;
  const createNewCarForm = document.getElementById('createNewCar') as HTMLFormElement;

  createNewCarForm?.addEventListener('submit', (event:Event) => {
    event.preventDefault();
    const newCar = {
      name: newCarName.value,
      color: newCarColor.value,
    };

    store.dispatch(createCar(newCar));
  });

  const carsList = document.getElementById('carsList');
  store.subscribe(() => {
    carsList?.insertAdjacentHTML('afterbegin', renderCar(store.getState().carsList[0]));

    createNewCarForm.reset();
  })
}