import { Content } from "../common/types";

export const renderPopup = ({title, id, className, content}: Content):string => (`
  <div id=${id} class="popup ${className}">
    <button class="btn-close">X</button>
    <div class="popup-title">
      <h2>${title}</h2>
    </div>
    <div class="popup-inner">
      ${content}
    </div>
  </div>
`);
