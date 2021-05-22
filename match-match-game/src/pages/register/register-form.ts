import { openPopup } from "../../popup/popup";
import {insertHtml} from "../../common/shared";
import {renderRegisterPopup} from "./render-register-popup";
import {startValidation} from "./validation";

export const startRegisterFormBehavior = ():void => {
  const registerBtn = document.getElementById('registerBtn');
  registerBtn?.addEventListener('click', openPopup);

  const registerForm = document.getElementById('registerForm');

  document.getElementById('cancel')?.addEventListener('cancel', () => {
    (registerForm as HTMLFormElement)?.reset();
  });
}

export const startRegisterForm = ():void => {
  insertHtml(renderRegisterPopup);
  startRegisterFormBehavior();
  startValidation();
}
