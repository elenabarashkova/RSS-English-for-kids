const settingsPageHtml = ():string => (`
  <div id="settingsPage" class="settings-page">
    <h2>Settings</h2>
    <form id="settingsForm" action="#"></form>
  </div>
`);

const generateSettingsFields = ():string => {
  const settingsFields = [
    {
      id: 'gameCards',
      fieldName: 'Game cards',
      placeholder: 'Select game cards type',
      options: ['fruits-pack', 'camping-pack', 'summer-pack',],
    },
    {
      id: 'difficulty',
      fieldName: 'Difficulty',
      placeholder: 'Select game type',
      options: ['easy', 'medium', 'hard',],
    },
  ]
  return settingsFields
    .map(({fieldName, id, placeholder, options}) => (`
      <label class="select-label"><span>${fieldName}</span>
        <select class="setting-select" id="${id}" name="${id}">
          <option hidden="" disabled="" selected="" value="">${placeholder}</option>
          ${options.map(item => `<option>${item}</option>`)};
        </select>
      </label>
      `))
    .join('');
}

export const rendersettingsPage = ():void => {
  const mainHtml = document.getElementById('main');
  if(mainHtml) { mainHtml.innerHTML = settingsPageHtml()}

  const settingsForm = document.getElementById('settingsForm');
  if(settingsForm) { settingsForm.innerHTML = generateSettingsFields()}
}