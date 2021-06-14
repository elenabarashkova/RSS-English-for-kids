import store from "../redux/core/store";
import { SERVER_ADDRESS_ENGINE } from "./constants";
import { addCurrentWinner, startCarAction, stopCarAction } from "../redux/actions";
import { startCarAnimation, stopCarAnimation, stopCarEngine } from "../modules/garage/car/car-animation";

export const startCar = async (id:number):Promise<void> => {
  try {
    const result = await (await fetch(`${SERVER_ADDRESS_ENGINE}?id=${id}&status=started`)).json();
    const { velocity, distance } = result;
    const duration = Math.round(distance / velocity) / 1000;

    startCarAction(id, duration);

    const state = store.getState();
    const { startedCarsList } = state;

    startCarAnimation(startedCarsList[startedCarsList.length - 1]);

    const driveResponse = await fetch(`${SERVER_ADDRESS_ENGINE}?id=${id}&status=drive`);

    if (!driveResponse.ok) {
      stopCarAnimation(id);
    } else {
      const newWinner: Winner = {
        id,
        wins: 1,
        time: duration,
      }

      addCurrentWinner(newWinner);
    }

  } catch(error) {
    alert('Error starting the car. Please, try again');
  }
}

export const stopCar = async (id:number):Promise<void> => {
  try {
    await fetch(`${SERVER_ADDRESS_ENGINE}?id=${id}&status=stopped`);

    stopCarAction(id);
    stopCarEngine(id);

  } catch(error) {
    alert('Error stopping the car. Please, try again');
  }
}