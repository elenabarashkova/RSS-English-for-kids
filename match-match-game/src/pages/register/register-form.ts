import { openPopup } from "../../popup";
import { insertHtml } from "../../shared";
import "./validation";

const registerPopupHtml = require('./register-form.html');

insertHtml(registerPopupHtml.default);
const registerBtn = document.getElementById('registerBtn');
registerBtn?.addEventListener('click', openPopup);

const registerForm = document.getElementById('registerForm');

// On cancel click
document.getElementById('cancel')?.addEventListener('cancel', () => {
  (registerForm as HTMLFormElement)?.reset();
});
