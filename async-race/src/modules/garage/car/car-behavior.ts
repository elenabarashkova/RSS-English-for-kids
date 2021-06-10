import { deleteCar, startCar } from "../../../services/service-requests";
import { selectCar } from "./select-car";

export const carBehavior = ():void => {
  const carRemoveBtns = document.getElementsByClassName('car-remove');
  const carSelectBtns = document.getElementsByClassName('car-select');
  const carStartBtn = document.getElementsByClassName('car-nav-a');
  const carStopBtn = document.getElementsByClassName('car-nav-b');

  [...carRemoveBtns].forEach(btn => btn.addEventListener('click', (event: Event) => {
    const targetId = (event.target as HTMLElement).dataset.id;

    deleteCar((parseInt(targetId as string, 10)));
  }));

  [...carSelectBtns].forEach(btn => btn.addEventListener('click', (event: Event) => {
    selectCar((event.target as HTMLElement).dataset.id as string);
  }));

  [...carStartBtn].forEach(btn => btn.addEventListener('click', (event: Event) => {
    const targetId = (event.target as HTMLElement).dataset.id;

    startCar((parseInt(targetId as string, 10)));
  }))
}