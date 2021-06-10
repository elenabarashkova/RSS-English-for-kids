import { SERVER_ADDRESS } from "./constants";
import { createCar, setCarsList, deleteCarAction, startCarAction, stopCarAction } from "../redux/actions";
import store from "../redux/core/store";
import { stopCarAnimation } from "../modules/garage/car/car-animation";

export const getCars = async ():Promise<void> => {
  const response = await fetch(`${SERVER_ADDRESS}/garage?_page=${store.getState().pageNumber}&_limit=7`);
  const total = parseInt(response.headers.get('X-Total-Count') as string, 10);

  const result = await response.json();

  setCarsList(result, total);
};

export const postNewCar = async (car: Car):Promise<void> => {
  try {
    const response = await fetch(`${SERVER_ADDRESS}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car),
    });

    const result = await response.json();

    createCar(result);

  } catch(error) {
    alert('Error creating the car. Please, try again');
  }
};

export const deleteCar = async (id:number):Promise<void> => {
  try {
    await (await fetch(`${SERVER_ADDRESS}/garage/${id}`, {
      method: 'DELETE',
    }));

    deleteCarAction(id);

  } catch(error) {
    alert('Error deleting the car. Please, try again');
  }
};

export const updateCar = async (car: Car):Promise<void> => {
  const id = store.getState().selectedCar;

  try {
    await (await fetch(`${SERVER_ADDRESS}/garage/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: car.name, color: car.color}),
    })).json();

    getCars();

  } catch(error) {
    alert('Error updating the car. Please, try again');
  }
}

export const startCar = async (id:number):Promise<void> => {
  try {
    const result = await (await fetch(`${SERVER_ADDRESS}/engine?id=${id}&status=started`)).json();
    const { velocity, distance } = result;
    const duration = Math.round(distance / velocity) / 1000;

    startCarAction(id, duration);

    const driveResponse = await fetch(`${SERVER_ADDRESS}/engine?id=${id}&status=drive`);

    if (!driveResponse.ok) {
      stopCarAnimation(id);
    }

  } catch(error) {
    alert('Error starting the car. Please, try again');
  }
}

export const stopCar = async (id:number):Promise<void> => {
  try {
    await fetch(`${SERVER_ADDRESS}/engine?id=${id}&status=stopped`);

    stopCarAction(id);

  } catch(error) {
    alert('Error stopping the car. Please, try again');
  }
}