import { setCarsList } from "../../redux/actions";
import { renderCar } from "./car/car";
import { renderGaragePage } from "./render";
import { getCars } from "../../services/service-requests";
import { createCarFormBehavior } from "./create-car-form";

const getInitialCarsList = async (store: Store) => {
  const data = await getCars();
  store.dispatch(setCarsList(data));
}

export const startGaragePage = (store: Store):void => {
  renderGaragePage();

  getInitialCarsList(store);

  createCarFormBehavior(store);

  const carsList = document.getElementById('carsList');

  store.subscribe(():void => {
    if(carsList) {
      carsList.innerHTML = '';
    }

    store.getState().carsList.forEach((car: Car) => carsList?.insertAdjacentHTML('beforeend', renderCar(car)));
  })
}