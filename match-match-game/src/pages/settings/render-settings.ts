import { SETTINGS_FIELDS } from "./constants";

const settingsPageHtml = (): string => (`
  <div id="settingsPage" class="settings-page">
    <h2>Settings</h2>
    <form id="settingsForm" action="#"></form>
  </div>
`);

const generateSettingsFields = (): string =>
  SETTINGS_FIELDS
    .map(({fieldName, id, placeholder, options}) => (`
      <label class="select-label"><span>${ fieldName }</span>
        <select class="setting-select" id="${ id }" name="${ id }">
          <option hidden="" disabled="" selected="" value="">${ placeholder }</option>
          ${ options.map(item => `<option>${ item }</option>`) };
        </select>
      </label>
      `))
    .join('');

export const rendersettingsPage = (): void => {
  const mainHtml = document.getElementById('main');
  if (mainHtml) {
    mainHtml.innerHTML = settingsPageHtml()
  }

  const settingsForm = document.getElementById('settingsForm');
  if (settingsForm) {
    settingsForm.innerHTML = generateSettingsFields()
  }
}