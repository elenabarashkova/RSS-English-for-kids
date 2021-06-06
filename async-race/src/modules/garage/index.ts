import { renderGaragePage } from "./render";
import { getCars } from "../../services/service-requests";
import { createCarFormBehavior } from "./forms/create-car-form";
import { carBehavior } from "./car/car-behavior";

export const startGaragePage = ():void => {
  renderGaragePage();
  getCars();
  createCarFormBehavior();
  carBehavior();
}