import {carBtnsClasses} from "./constants";
import { deleteCar } from "../../../services/service-requests";

const removeCar = (targetCarItemId: string, deleteCarAction:CallableFunction):void => {
  const carIdNum = parseInt(targetCarItemId, 10);
  deleteCar(carIdNum, deleteCarAction);
}

const selectCar = (targetCarItemId: string):void => {
  const carIdNum = parseInt(targetCarItemId, 10);
  console.log(targetCarItemId);
}

export const carBehavior = (deleteCarAction:CallableFunction):void => {
  const carsList = document.getElementById('carsList');

  carsList?.addEventListener('click', (event:Event) => {
    const target = event.target as HTMLElement;
    const targetCarItemId = (target?.closest(".car-item"))?.id as string;

    const carRemoveBtnClass = carBtnsClasses.carRemove;
    const carSelectBtnClass = carBtnsClasses.carSelect;

    if(target.classList.contains(carRemoveBtnClass)) {
      removeCar(targetCarItemId, deleteCarAction);
    }

    if(target.classList.contains(carSelectBtnClass)) {
      selectCar(targetCarItemId);
    }
  })
}