import { getElement, setDisabledState } from "../../../shared";

export const startCarAnimation = ({ id, duration}: StartedCar):void => {
  const car = getElement('.car', `${id}`);

  car.style.animationName = 'drive';
  car.style.animationDuration = `${duration}s`;
  car.style.animationPlayState = 'running';

  const btnStart = getElement('.car-nav-a', `${id}`);
  const btnStop = getElement('.car-nav-b', `${id}`);

  setDisabledState(btnStart, btnStop);
}

export const stopCarAnimation = (id: number):void => {
  const car = getElement('.car', `${id}`);

  car.style.animationPlayState = 'paused';
}

export const stopCarEngine = (id: number):void => {
  const car = getElement('.car', `${id}`);

  car.style.animationName = '';
  car.style.animationDuration = '';
  car.style.animationPlayState = '';

  const btnStart = getElement('.car-nav-a', `${id}`);
  const btnStop = getElement('.car-nav-b', `${id}`);

  setDisabledState(btnStop, btnStart);
}