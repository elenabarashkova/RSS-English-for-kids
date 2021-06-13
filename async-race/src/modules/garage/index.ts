import { insertCarsCount, insertPageNumber, renderCarsList, renderGaragePage } from "./render";
import { getCars } from "../../services/service-requests";
import { createCarFormBehavior } from "./forms/create-car-form";
import { carBehavior } from "./car/car-behavior";
import { updateCarFormBehavior } from "./forms/update-car-form";
import { handlePagination, onGarageHashChange, pagination } from "./pagination";
import { getGaragePageNumber } from "../../shared";
import { race, raceStoptHandler } from "./race";

export const startGaragePage = ():void => {
  renderGaragePage();
  handlePagination();
  getCars();
  carBehavior();
  createCarFormBehavior();
  updateCarFormBehavior();
  pagination();
  race();
}

export const stopGaragePage = ():void => {
  window.removeEventListener("hashchange", onGarageHashChange);
  raceStoptHandler();
}

export const onCarsListUpdate = (stateCarsList: CarsList, stateTotalCars: number):void => {
  renderCarsList(stateCarsList);
  carBehavior();
  insertCarsCount(stateTotalCars);
  insertPageNumber(getGaragePageNumber());
}