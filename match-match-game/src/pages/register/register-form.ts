import { openPopup } from "../../popup";
import { insertHtml } from "../../shared";

const registerPopupHtml = require('./register-form.html');

insertHtml(registerPopupHtml.default);
const registerBtn = document.getElementById('registerBtn');
registerBtn?.addEventListener('click', openPopup);