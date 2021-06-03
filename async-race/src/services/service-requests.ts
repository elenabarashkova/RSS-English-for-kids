import { SERVER_ADDRESS } from "../shared/constants";

export const getCars = async ():Promise<Array<Car>> => {
  const response = await fetch(`${SERVER_ADDRESS}/garage`);
  return response.json();
};