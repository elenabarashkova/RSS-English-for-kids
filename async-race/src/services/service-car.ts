import {
  CARS_LIMIT,
  SERVER_ADDRESS_GARAGE,
  SERVER_ADDRESS_WINNERS,
} from "./constants";
import { setCarsList } from "../redux/actions";
import store from "../redux/core/store";
import { getGaragePageNumber } from "../shared";

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