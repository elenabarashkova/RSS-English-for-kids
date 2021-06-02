import { SERVER_ADDRESS } from "./constants";

export const getCars = ():Promise<Array<Car>> => {
  const promise = fetch(`${SERVER_ADDRESS}/garage`);
  return promise.then((response) => response.json());
};