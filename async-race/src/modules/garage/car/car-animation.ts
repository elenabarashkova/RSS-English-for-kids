import { getElement, switchDisabledState } from "../../../shared";

export const startCarAnimation = ({ id, duration}: StartedCar):void => {
  const car = getElement('.car', `${id}`);

  if(!car) {
    return;
  }

  car.style.animationName = 'drive';
  car.style.animationDuration = `${duration}s`;
  car.style.animationPlayState = 'running';

  const btnStart = getElement('.car-nav-a', `${id}`);
  const btnStop = getElement('.car-nav-b', `${id}`);

  switchDisabledState(btnStart, btnStop);
}

export const stopCarAnimation = (id: number):void => {
  const car = getElement('.car', `${id}`);

  if(!car) {
    return;
  }

  car.style.animationPlayState = 'paused';
}

export const stopCarEngine = (id: number):void => {
  const car = getElement('.car', `${id}`);

  if(!car) {
    return;
  }

  car.style.animationName = '';
  car.style.animationDuration = '';
  car.style.animationPlayState = '';

  const btnStart = getElement('.car-nav-a', `${id}`);
  const btnStop = getElement('.car-nav-b', `${id}`);

  switchDisabledState(btnStop, btnStart);
}