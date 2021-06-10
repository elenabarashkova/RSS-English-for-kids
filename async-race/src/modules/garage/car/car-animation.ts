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
  console.log(carContainer);
  console.log('test');
  car.style.animationPlayState = 'paused';

}