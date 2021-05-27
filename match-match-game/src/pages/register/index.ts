import {openPopupHandler} from "../../popup/popup";
import {startValidation} from "./validation";
import {handlePhotoInput} from "./photo-behavior";

export const startRegisterFormBehavior = ():void => {
  const registerBtn = document.getElementById('registerBtn');
  registerBtn?.addEventListener('click', openPopupHandler);

  const registerForm = document.getElementById('registerForm');

  document.getElementById('cancel')?.addEventListener('cancel', () => {
    (registerForm as HTMLFormElement)?.reset();
  });

  handlePhotoInput();
}

export const startRegisterForm = ():void => {
  startRegisterFormBehavior();
  startValidation();
}
