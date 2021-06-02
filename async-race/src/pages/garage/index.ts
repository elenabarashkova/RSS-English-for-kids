import { setCarsList } from "../../redux/actions";
import { renderCar } from "./car/car";
import { renderGaragePage } from "./render";
import { getCars } from "../../shared/server-requests";
import { createCarFormBehavior } from "./create-car-form";

export const startGaragePage = (store: Store):void => {
  renderGaragePage();

  getCars().then(data => {
    store.dispatch(setCarsList(data));
  });

  createCarFormBehavior(store);

  const carsList = document.getElementById('carsList');

  store.subscribe(():void => {
    if(carsList) {
      carsList.innerHTML = '';
    }

    store.getState().carsList.forEach((car: Car) => carsList?.insertAdjacentHTML('beforeend', renderCar(car)));
  })
}