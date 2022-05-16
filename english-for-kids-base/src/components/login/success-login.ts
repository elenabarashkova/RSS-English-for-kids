import { removeLogin } from "./render";
import { ADMIN_ROUTE } from "../../router/constants";
import { setLogin } from "../indexedDB";
import { login } from "../../server/login";
import { redirectToDefaultPage } from "../../shared";

export const successLogin = async (loginData: Record<string, string>): Promise<void> => {

  try {
    const token = await login(loginData);
    await setLogin(token);
    removeLogin();
    window.location.hash = ADMIN_ROUTE;
  }
  catch (error) {
    redirectToDefaultPage();
  }
}