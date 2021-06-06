import { SERVER_ADDRESS } from "./constants";

export const getCars = async (setCarsListAction:CallableFunction):Promise<void> => {
  const response = await (await fetch(`${SERVER_ADDRESS}/garage`)).json();
  setCarsListAction(response);
};

export const postNewCar = async (car: Car, createCarAction: CallableFunction):Promise<void> => {
  try {
    const response = await (await fetch(`${SERVER_ADDRESS}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car),
    })).json();
    createCarAction(response);
  } catch(error) {
    alert('Error creating the car. Please, try again');
  }
};