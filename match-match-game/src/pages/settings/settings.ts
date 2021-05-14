import {addPageHtml, setActiveMenuItem} from "../../common/shared";

const settingsIconLink = require('../../assets/settings-icon.svg');

export const SETTINGS_NAME = 'Game Settings';
const SETTINGS_HTML = '<div>Settings</div>';
export const SETTINGS_ID = 'settings';
export const settingsIcon = settingsIconLink;

export const startSettingsPage = () => {
  setActiveMenuItem(SETTINGS_ID);
  addPageHtml(SETTINGS_HTML);
}