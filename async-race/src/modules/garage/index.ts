import { renderGaragePage } from "./render";
import { getCars } from "../../services/service-requests";
import { createCarFormBehavior } from "./forms/create-car-form";

export const startGaragePage = ():void => {
  renderGaragePage();
  getCars();
  createCarFormBehavior();
}