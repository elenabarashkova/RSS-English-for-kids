import { startCar, stopCar } from "../../../services/service-requests";
import { switchDisabledState } from "../../../shared"
import { raceStartAction } from "../../../redux/actions";

export const race = ():void => {
  const raceBtn = document.getElementById('raceBtn') as HTMLElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLElement;

  raceBtn?.addEventListener('click', () => {
    switchDisabledState(raceBtn, resetBtn);

    const carsOnPage = document.getElementsByClassName('car-item');

    [...carsOnPage].forEach(car => {
      startCar(parseInt(car.id, 10));
      car.classList.add('in-race');
    });

    raceStartAction();
  });

  resetBtn?.addEventListener('click', () => {
    switchDisabledState(resetBtn, raceBtn);

    const carsInRace = document.getElementsByClassName('car-item in-race');

    [...carsInRace].forEach(car => {
      stopCar(parseInt(car.id, 10));
      car.classList.remove('in-race');
    });
  })
}