import { openPopup } from "../../popup/popup";
import {insertHtml} from "../../common/shared";
import {renderRegisterPopup} from "./render-register-popup";
import {startValidation} from "./validation";

export const startRegisterFormBehavior = () => {
  const registerBtn = document.getElementById('registerBtn');
  registerBtn?.addEventListener('click', openPopup);

  const registerForm = document.getElementById('registerForm');

// On cancel click
  document.getElementById('cancel')?.addEventListener('cancel', () => {
    (registerForm as HTMLFormElement)?.reset();
  });
}

export const startRegisterForm = () => {
  insertHtml(renderRegisterPopup);
  startRegisterFormBehavior();
  startValidation();
}
