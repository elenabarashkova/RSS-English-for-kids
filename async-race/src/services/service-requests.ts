import { SERVER_ADDRESS } from "./constants";
import { createCar, setCarsList, deleteCarAction } from "../redux/actions";
import store from "../redux/core/store";

export const getCars = async ():Promise<void> => {
  const response = await fetch(`${SERVER_ADDRESS}/garage`);

  const result = await response.json();

  setCarsList(result);
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