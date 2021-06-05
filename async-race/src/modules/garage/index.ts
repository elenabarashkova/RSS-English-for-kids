import { renderGaragePage } from "./render";
import { getCars } from "../../services/service-requests";
import { createCarFormBehavior } from "./forms/create-car-form";

const getInitialCarsList = async (setCarsListAction:CallableFunction) => {
  const data = await getCars();
  setCarsListAction(data);
}

export const startGaragePage = (setCarsListAction:CallableFunction, createCarAction:CallableFunction):void => {
  renderGaragePage();
  getInitialCarsList(setCarsListAction);
  createCarFormBehavior(createCarAction);
}