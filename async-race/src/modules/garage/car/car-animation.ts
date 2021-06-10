export const startCarAnimation = (startedCar: StartedCar):void => {
  const carContainer = document.getElementById(`${startedCar.id}`) as HTMLElement;
  const car = carContainer.querySelector(`.car`) as HTMLElement;

  car.style.animationName = 'drive';
  car.style.animationDuration = `${startedCar.duration}s`;
  car.style.animationPlayState = 'running';

  (carContainer.querySelector('.car-nav-a') as HTMLElement).setAttribute('disabled', '');
  (carContainer.querySelector('.car-nav-b') as HTMLElement).removeAttribute('disabled');
}

export const stopCarAnimation = (id: number):void => {
  const carContainer = document.getElementById(`${id}`) as HTMLElement;

  (carContainer.querySelector(`.car`) as HTMLElement).style.animationPlayState = 'paused';
}

export const stopCarEngine = (id: number):void => {
  const carContainer = document.getElementById(`${id}`) as HTMLElement;
  const car = carContainer.querySelector(`.car`) as HTMLElement;

  car.style.animationName = '';
  car.style.animationDuration = '';
  car.style.animationPlayState = '';

  (carContainer.querySelector('.car-nav-b') as HTMLElement).setAttribute('disabled', '');
  (carContainer.querySelector('.car-nav-a') as HTMLElement).removeAttribute('disabled');
}