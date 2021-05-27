import {handleSettings} from "./get-settings";

const onSettingsChange = ():void => {
  const settingsSelects = document.getElementsByClassName('setting-select');
  [...settingsSelects].map(item => item.addEventListener('change', handleSettings))
};

export const settingsBehavior = ():void => {
  onSettingsChange();
}