export const settingsPageHtml = ():string =>
  `<div id="settingsPage" class="settings-page">
    <h2>Settings</h2>
    <form id="settingsForm" action="#"></form>
  </div>
`;

export const renderSettingsFields = () => {
  const settingsFields = [
    {
      id: 'gameCards',
      fieldName: 'Game cards',
      placeholder: 'Select game cards type',
      options: ['camping-pack', 'fruits-pack', 'summer-pack',],
    },
    {
      id: 'difficulty',
      fieldName: 'Difficulty',
      placeholder: 'Select game type',
      options: ['easy', 'medium', 'hard',],
    },
  ]
  const html = settingsFields.map(({fieldName, id, placeholder, options}) =>
    (`<label class="select-label"><span>${fieldName}</span>
      <select id="${id}" name="${id}">
        <option hidden="" disabled="" selected="" value="">${placeholder}</option>
        ${options.map(item => `<option>${item}</option>`)};
      </select>
    </label>`
    )).join('');
  const settingsForm = document.getElementById('settingsForm');
  if(settingsForm) {
    settingsForm.innerHTML = html;
  }
}