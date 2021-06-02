import { createCar, setCarsList } from "../redux/actions";
import { renderCar } from "./car";
import { SERVER_ADDRESS } from "../shared/constants";

export const startGaragePage = (store: Store) => {


  const promise = fetch(`${SERVER_ADDRESS}/garage`);
  promise.then((response) => response.json())
  .then((data) => {
    store.dispatch(setCarsList(data));
  });


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
    // debugger;
    if(carsList) {
      carsList.innerHTML = '';
    }
    store.getState().carsList.forEach((car: Car) => carsList?.insertAdjacentHTML('beforeend', renderCar(car)));
    createNewCarForm.reset();
  })
}