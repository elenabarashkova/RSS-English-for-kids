import { SERVER_ADDRESS } from "./constants";

export const getCars = async ():Promise<Array<Car>> => {
  const response = await fetch(`${SERVER_ADDRESS}/garage`);
  return response.json();
};