import { openPopup } from "../../popup/popup";
import { addUser } from "../../common/indexedDB";
import { PersonData } from "../../common/types";

export const startRegisterFormBehavior = () => {
  const registerBtn = document.getElementById('registerBtn');
  registerBtn?.addEventListener('click', openPopup);

  const registerForm = document.getElementById('registerForm');

// On cancel click
  document.getElementById('cancel')?.addEventListener('cancel', () => {
    (registerForm as HTMLFormElement)?.reset();
  });
}
