import { insertCarsCount, insertPageNumber, renderCarsList, renderGaragePage } from "./render";
import { getCars } from "../../services/service-requests";
import { createCarFormBehavior, getCreateCarFormData } from "./forms/create-car-form";
import { carBehavior } from "./car/car-behavior";
import { getUpdateCarFormData, updateCarFormBehavior } from "./forms/update-car-form";
import { handlePagination, onGarageHashChange, pagination } from "./pagination";
import { getGaragePageNumber } from "../../shared";
import { race, raceStoptHandler } from "./race";
import { saveFormsData } from "../../redux/actions";
import { removePopup } from "./race/popup";
import { generateCarsBehavior } from "./car/generate-cars";

export const startGaragePage = (garageFormsConfig: GarageFormsConfig):void => {
  renderGaragePage(garageFormsConfig);
  handlePagination();
  getCars();
  carBehavior();
  createCarFormBehavior();
  updateCarFormBehavior();
  generateCarsBehavior();
  pagination();
  race();
}

export const stopGaragePage = ():void => {
  window.removeEventListener("hashchange", onGarageHashChange);
  raceStoptHandler();

  const garageFormsConfig = {
    ...getCreateCarFormData(),
    ...getUpdateCarFormData(),
  };

  saveFormsData(garageFormsConfig);

  removePopup();
}

export const onCarsListUpdate = (stateCarsList: CarsList, stateTotalCars: number):void => {
  renderCarsList(stateCarsList);
  carBehavior();
  insertCarsCount(stateTotalCars);
  insertPageNumber(getGaragePageNumber());
}