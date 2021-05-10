import { openPopup } from "../../popup";
import { insertHtml } from "../../shared";

const registerPopupHtml = "<div id=\"registerPopup\" class=\"popup registert-popup\">\n" +
  "    <button class=\"btn-close\">X</button>\n" +
  "    <div class=\"popup-inner\">\n" +
  "\n" +
  "    </div>\n" +
  "  </div>";
insertHtml(registerPopupHtml);
const registerBtn = document.getElementById('registerBtn');
registerBtn?.addEventListener('click', openPopup);