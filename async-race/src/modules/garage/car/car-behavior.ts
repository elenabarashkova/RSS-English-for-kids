import {carBtnsClasses} from "./constants";
import { deleteCar, updateCar1 } from "../../../services/service-requests";
import { updateCarFormBehavior } from "../forms/update-car-form";

const removeCar = (targetCarItemId: number, deleteCarAction:CallableFunction):void => {
  deleteCar(targetCarItemId, deleteCarAction);
}

const selectCar = (targetCar: HTMLElement, targetCarItemId:number, updateCarAction: CallableFunction):void => {
  updateCarFormBehavior(targetCar, targetCarItemId, updateCarAction);
}

export const carBehavior = (deleteCarAction:CallableFunction, updateCarAction: CallableFunction):void => {
  const carsList = document.getElementById('carsList');

  carsList?.addEventListener('click', (event:Event) => {
    const target = event.target as HTMLElement;
    const targetCarItem = target?.closest(".car-item");
    const targetCarItemId = parseInt(targetCarItem?.id as string, 10);

    const carRemoveBtnClass = carBtnsClasses.carRemove;
    const carSelectBtnClass = carBtnsClasses.carSelect;

    if(target.classList.contains(carRemoveBtnClass)) {
      removeCar(targetCarItemId, deleteCarAction);
    }

    if(target.classList.contains(carSelectBtnClass)) {
      selectCar(targetCarItem as HTMLElement, targetCarItemId, updateCarAction);
    }
  })
}