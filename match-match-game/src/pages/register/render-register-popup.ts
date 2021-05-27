import { renderPopup } from "../../popup/render-popup";

export const renderRegisterInputs = ():string => {
  const formInputs = [
    {
      fieldName: 'First name',
      id: 'firstName',
      type: 'text',
      placeholder: 'Lena',
      pattern: `pattern="^[A-Za-zА-Яа-я0-9\\-]*[a-zA-ZА-Яа-я]{1}[A-Za-zА-Яа-я0-9\\-]*$"`,
      required: 'required',
    },
    {
      fieldName: 'Last name',
      id: 'lastName',
      type: 'text',
      placeholder: 'Barashkova',
      pattern: `pattern="^[A-Za-zА-Яа-я0-9\\-]*[a-zA-ZА-Яа-я]{1}[A-Za-zА-Яа-я0-9\\-]*$"`,
      required: 'required',
    },
    {
      fieldName: 'Email',
      id: 'email',
      type: 'email',
      placeholder: 'lenabarashkova@mail.ru',
      pattern: '',
      required: 'required',
    }
  ]

  return formInputs.map(({fieldName, id, type, placeholder, pattern, required}) =>
    (`
    <label>
      <span>${fieldName}</span>
      <input id=${id} class="register-input" type=${type} name=${id} 
      placeholder=${placeholder} ${pattern} ${required} maxlength="30">
    </label>
    `)
  ).join('');
};

const content =
  (`
  <form id="registerForm" class="register-form" action="#">
    <div class="form-inner">
      ${renderRegisterInputs()}
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