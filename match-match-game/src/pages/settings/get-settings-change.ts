import {getSettings} from "./get-settings";

export const getSettingsChange = ():void => {
  const settingsSelects = document.getElementsByClassName('setting-select');
  [...settingsSelects].map(item => item.addEventListener('change', getSettings))
};