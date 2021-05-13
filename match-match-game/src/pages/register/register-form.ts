import { openPopup } from "../../popup";
import "./register-html-insert";
import "./validation";

const registerBtn = document.getElementById('registerBtn');
registerBtn?.addEventListener('click', openPopup);

const registerForm = document.getElementById('registerForm');

// On cancel click
document.getElementById('cancel')?.addEventListener('cancel', () => {
  (registerForm as HTMLFormElement)?.reset();
});
