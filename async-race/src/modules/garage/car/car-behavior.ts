import {carBtnsClasses} from "./constants";
import { deleteCar } from "../../../services/service-requests";
import { updateCarFormBehavior } from "../forms/update-car-form";

const removeCar = (targetCarItemId: number):void => {
  deleteCar(targetCarItemId);
}

const selectCar = (targetCar: HTMLElement, targetCarItemId:number):void => {
  updateCarFormBehavior(targetCar, targetCarItemId);
}

export const carBehavior = ():void => {
  const carsList = document.getElementById('carsList');

  carsList?.addEventListener('click', (event:Event) => {
    const target = event.target as HTMLElement;
    const targetCarItem = target?.closest(".car-item");
    const targetCarItemId = parseInt(targetCarItem?.id as string, 10);

    const carRemoveBtnClass = carBtnsClasses.carRemove;
    const carSelectBtnClass = carBtnsClasses.carSelect;

    if(target.classList.contains(carRemoveBtnClass)) {
      removeCar(targetCarItemId);
    }

    if(target.classList.contains(carSelectBtnClass)) {
      selectCar(targetCarItem as HTMLElement, targetCarItemId);
    }
  })
}