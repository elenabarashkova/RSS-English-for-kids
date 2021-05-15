import { renderPopup } from "../../popup/render-popup";

export const renderRegisterInputs = () => {
  const formInputs = [
    {
      fieldName: 'First name',
      type: 'text',
      inputName: 'first-name',
      placeholder: 'Lena',
      pattern: `pattern="^[A-Za-z0-9]*[a-zA-Z]{1}[A-Za-z0-9]*$"`,
      required: 'required',
    },
    {
      fieldName: 'Last name',
      type: 'text',
      inputName: 'last-name',
      placeholder: 'Barashkova',
      pattern: `pattern="^[A-Za-z0-9]*[a-zA-Z]{1}[A-Za-z0-9]*$"`,
      required: 'required',
    },
    {
      fieldName: 'Email',
      type: 'email',
      inputName: 'email',
      placeholder: 'lenabarashkova@mail.ru',
      pattern: '',
      required: 'required',
    }
  ]

  return formInputs.map(({fieldName, type, inputName, placeholder, pattern, required}) =>
    (`<label>
          <span>${fieldName}</span>
          <input class="register-input" type=${type} name=${inputName} 
          placeholder=${placeholder} ${pattern} ${required}>
        </label>`
    )).join('');
}

const content = (
  `<form id="registerForm" class="register-form" action="#">
      <div class="form-inner">
        ${renderRegisterInputs()}
        <label class="add-user-pic">
          <span>Add user picture</span>
          <img src="./assets/user-default-pic.png" alt="User-pic">
          <input type="file" name="user-photo">
        </label>
      </div>
      <div class="buttons-wrap">
        <button id="registerSubmit" class="btn btn-dark" type="submit">Add user</button>
        <button id="cancel" class="btn btn-dark">Cancel</button>
      </div>
    </form>`
);

const registerContent = {
  title: 'Register new player',
  id: 'registerPopup',
  className: 'register-popup',
  content,
}
export const renderRegisterPopup = renderPopup(registerContent);