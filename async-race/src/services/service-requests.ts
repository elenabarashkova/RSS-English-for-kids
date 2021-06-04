import { SERVER_ADDRESS } from "./constants";

export const getCars = async ():Promise<Array<Car>> => {
  const response = await fetch(`${SERVER_ADDRESS}/garage`);
  return response.json();
};

export const postNewCar = async (car: Car):Promise<Car | null> => {
  try {
    const response = await fetch(`${SERVER_ADDRESS}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car),
    });
    return await response.json();
  } catch(error) {
    alert('Error creating the car. Please, try again');
    return null;
  }
};