export const startCarAnimation = (startedCar: StartedCar):void => {
  const carContainer = document.getElementById(`${startedCar.id}`) as HTMLElement;
  const car = carContainer.querySelector(`.car`) as HTMLElement;

  car.style.animationName = 'drive';
  car.style.animationDuration = `${startedCar.duration}s`;
  car.style.animationPlayState = 'running';

  const startBtn = carContainer.querySelector('.car-nav-a') as HTMLElement;
  const stopBtn = carContainer.querySelector('.car-nav-b') as HTMLElement;

  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
}

export const stopCarAnimation = (id: number):void => {
  const carContainer = document.getElementById(`${id}`) as HTMLElement;
  const car = carContainer.querySelector(`.car`) as HTMLElement;

  car.style.animationPlayState = 'paused';
}

export const stopCarEngine = (id: number):void => {
  const carContainer = document.getElementById(`${id}`) as HTMLElement;
  const car = carContainer.querySelector(`.car`) as HTMLElement;

  car.style.animationName = '';
  car.style.animationDuration = '';
  car.style.animationPlayState = '';

  const startBtn = carContainer.querySelector('.car-nav-a') as HTMLElement;
  const stopBtn = carContainer.querySelector('.car-nav-b') as HTMLElement;

  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
}