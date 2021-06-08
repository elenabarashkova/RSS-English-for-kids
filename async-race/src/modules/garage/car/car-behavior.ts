import { deleteCar } from "../../../services/service-requests";
import { selectCar } from "./select-car";

export const carBehavior = ():void => {
  const carRemoveBtns = document.getElementsByClassName('car-remove');
  const carSelectBtns = document.getElementsByClassName('car-select');

  [...carRemoveBtns].forEach(btn => btn.addEventListener('click', (event: Event) => {
    const targetId = (event.target as HTMLElement).dataset.id;

    deleteCar((parseInt(targetId as string, 10)));
  }));

  [...carSelectBtns].forEach(btn => btn.addEventListener('click', (event: Event) => {
    selectCar((event.target as HTMLElement).dataset.id as string);
  }));
}