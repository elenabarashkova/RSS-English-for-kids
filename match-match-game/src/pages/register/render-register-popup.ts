import { renderPopup } from "../../popup/render-popup";
import { FORM_INPUTS } from "./constants";

export const renderRegisterInputs = (): string =>
  FORM_INPUTS
    .map(({fieldName, id, type, placeholder, pattern, required}) =>
      (`
      <label>
        <span>${ fieldName }</span>
        <input id=${ id } class="register-input" type=${ type } name=${ id }
        placeholder=${ placeholder } ${ pattern } ${ required } maxlength="30">
        <span class="error-text"></span>
      </label>
      `))
    .join('');

const content = (`
  <form id="registerForm" class="register-form" action="#">
    <div class="form-inner">
      ${ renderRegisterInputs() }
      <label class="add-user-pic">
        <span>Add user picture</span>
        <span class="user-picture">
          <img id="userPhotoImg" src="./assets/user-default-pic.png" alt="User-pic">
        </span>
        <input id="userPhoto" type="file" name="userPhoto">
      </label>
    </div>
    <div class="buttons-wrap">
      <button id="registerSubmit" class="btn btn-dark" type="submit">Add user</button>
      <button id="cancel" class="btn btn-dark">Cancel</button>
    </div>
  </form>
`);

const registerContent = {
  title: 'Register new player',
  id: 'registerPopup',
  className: 'register-popup',
  content,
}

export const renderRegisterPopup = renderPopup(registerContent);