import { startCar, stopCar } from "../../../services/service-requests";
import { switchDisabledState } from "../../../shared"

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

// todo: add new state: 1. isRaceStarted:boolean; 2.CurrentWinner: StartedCar
// start action on click on raceBtn to change isRaceStarted && CurrentWinner = null
// in else of service error catcher add action  - writeCurrentWinner
// in reducer: if isRaceStarted && actionType === writeCurrentWinner => isRaceStarted=false, CurrentWinner === payload
// in subscriber: CurrentWinner === updated && !== null => show popup, && service = createWinner