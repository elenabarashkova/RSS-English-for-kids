export const startCarAnimation = (startedCar: StartedCar):void => {
  const carContainer = document.getElementById(`${startedCar.id}`) as HTMLElement;
  const car = carContainer.querySelector(`.car`) as HTMLElement;

  car.style.animationName = 'drive';
  car.style.animationDuration = `${startedCar.duration}s`;
  car.style.animationPlayState = 'running';
}

export const stopCarAnimation = (id: number):void => {
  const carContainer = document.getElementById(`${id}`) as HTMLElement;
  const car = carContainer.querySelector(`.car`) as HTMLElement;

  car.style.animationPlayState = 'paused';
}

export const stopCarEngine = (id: number) => {
  const carContainer = document.getElementById(`${id}`) as HTMLElement;
  const car = carContainer.querySelector(`.car`) as HTMLElement;

  car.style.animationName = '';
  car.style.animationDuration = '';
  car.style.animationPlayState = '';
}