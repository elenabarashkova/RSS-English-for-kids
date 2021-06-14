import { startCar, stopCar } from "../../../services/service-car-drive";
import { switchDisabledState } from "../../../shared"
import { raceStartAction, raceStopAction } from "../../../redux/actions";
import { removePopup } from "./popup";

const raceStartHandler = (): void => {
  const raceBtn = document.getElementById('raceBtn') as HTMLElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLElement;

  switchDisabledState(raceBtn, resetBtn);

  const carsOnPage = document.getElementsByClassName('car-item');

  [...carsOnPage].forEach(car => {
    startCar(parseInt(car.id, 10));
    car.classList.add('in-race');
  });

  raceStartAction();
}

export const raceStoptHandler = (): void => {
  const raceBtn = document.getElementById('raceBtn') as HTMLElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLElement;

  switchDisabledState(resetBtn, raceBtn);

  raceStopAction();

  const carsInRace = document.getElementsByClassName('car-item in-race');

  if(carsInRace.length) {
    [...carsInRace].forEach(car => {
      stopCar(parseInt(car.id, 10));
      car.classList.remove('in-race');
    });
  }

  removePopup();
}

export const race = (): void => {
  const raceBtn = document.getElementById('raceBtn') as HTMLElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLElement;

  raceBtn?.addEventListener('click', raceStartHandler);
  resetBtn?.addEventListener('click', raceStoptHandler);
}