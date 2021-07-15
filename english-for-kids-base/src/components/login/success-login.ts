import { removeLogin } from "./render";
import { ADMIN_ROUTE } from "../../router/constants";
import { setIsLogin } from "../indexedDB";

export const successLogin = async (): Promise<void> => {

  try {
    await setIsLogin(true);
    removeLogin();
    window.location.hash = ADMIN_ROUTE;
  }
  catch (error) {
    console.log(error);
  }
}