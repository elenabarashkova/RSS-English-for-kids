import { SERVER_ADDRESS } from "./constants";
import { setCarsList } from "../redux/actions";

export const getCars = () => {
  const promise = fetch(`${SERVER_ADDRESS}/garage`);
  return promise.then((response) => response.json());
};