import { insertCarsCount, renderCarsList, renderGaragePage } from "./render";
import { getCars } from "../../services/service-requests";
import { createCarFormBehavior } from "./forms/create-car-form";
import { carBehavior } from "./car/car-behavior";
import { updateCarFormBehavior } from "./forms/update-car-form";
import { pagination } from "../pagination";

export const startGaragePage = ():void => {
  renderGaragePage();
  getCars();
  carBehavior();
  createCarFormBehavior();
  updateCarFormBehavior();
  pagination();
}

export const onCarsListUpdate = (stateCarsList: CarsList, stateTotalCars: number):void => {
  renderCarsList(stateCarsList);
  carBehavior();
  insertCarsCount(stateTotalCars);
}