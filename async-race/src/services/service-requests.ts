import {
  CARS_LIMIT,
  WINNERS_LIMIT,
  SERVER_ADDRESS_GARAGE,
  SERVER_ADDRESS_WINNERS,
  SERVER_ADDRESS_ENGINE
} from "./constants";
import { addCurrentWinner, setCarsList, setWinnersList, startCarAction, stopCarAction } from "../redux/actions";
import store from "../redux/core/store";
import { startCarAnimation, stopCarAnimation, stopCarEngine } from "../modules/garage/car/car-animation";
import { getGaragePageNumber, getWinnersPageNumber } from "../shared";
import { startPopup } from "../modules/garage/race/popup";

export const getCars = async ():Promise<void> => {
  const pageNum = getGaragePageNumber();

  const response = await fetch(`${SERVER_ADDRESS_GARAGE}?_page=${pageNum}&_limit=${CARS_LIMIT}`);
  const total = parseInt(response.headers.get('X-Total-Count') as string, 10);

  const result = await response.json();

  setCarsList(result, total);
};

export const postNewCar = async (car: Car):Promise<void> => {
  try {
    await fetch(`${SERVER_ADDRESS_GARAGE}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car),
    });

    getCars();

  } catch(error) {
    alert('Error creating the car. Please, try again');
  }
};

export const deleteCar = async (id:number):Promise<void> => {
  try {
    await fetch(`${SERVER_ADDRESS_GARAGE}/${id}`, {
      method: 'DELETE',
    });
    await fetch(`${SERVER_ADDRESS_WINNERS}/${id}`, {
      method: 'DELETE',
    });

    getCars();

  } catch(error) {
    alert('Error deleting the car. Please, try again');
  }
};

export const updateCar = async (car: Car):Promise<void> => {
  const {selectedCarId} = store.getState();

  try {
    await (await fetch(`${SERVER_ADDRESS_GARAGE}/${selectedCarId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car),
    })).json();

    getCars();

  } catch(error) {
    alert('Error updating the car. Please, try again');
  }
}

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

export const createWinner = async (winner: Winner):Promise<void> => {
  try {
    const winnerExisting = await (await fetch(`${SERVER_ADDRESS_WINNERS}/${winner.id}`)).json();

    if(!winnerExisting.id) {
      await fetch(`${SERVER_ADDRESS_WINNERS}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(winner),
      });
    } else {
      const newWinner = {
        ...winnerExisting,
        wins: winnerExisting.wins + 1,
        time: winnerExisting.time > winner.time ? winner.time : winnerExisting.time,
      }

      await fetch(`${SERVER_ADDRESS_WINNERS}/${newWinner.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWinner),
      });
    }
    const state = store.getState();
    const winnerName = state.carsList.find((car: Car) => car.id === winner.id).name;
    startPopup(winnerName, state.currentWinner.time);

  } catch(error) {
    alert('Error creating the winner. Please, try again');
  }
}

export const getWinners = async (sortBy='id',orderBy='ASC'):Promise<void> => {
  const pageNum = getWinnersPageNumber();

  const page = `_page=${pageNum}`;
  const limit = `_limit=${WINNERS_LIMIT}`;
  const sort = `_sort=${sortBy}`;
  const order = `_order=${orderBy}`;

  const response = await fetch(`${SERVER_ADDRESS_WINNERS}?${page}&${limit}&${sort}&${order}`);
  const total = parseInt(response.headers.get('X-Total-Count') as string, 10);

  const result = await response.json();

  const winnersList = await Promise.all(result.map(async (winner: Winner): Promise<Winner> => {
    const car = await (await fetch(`${SERVER_ADDRESS_GARAGE}/${winner.id}`)).json();

    return {
      ...winner,
      ...car,
    }
  }));

  setWinnersList(winnersList as WinnersList, total);
}