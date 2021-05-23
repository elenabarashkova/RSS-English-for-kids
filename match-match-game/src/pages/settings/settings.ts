import { addPageHtml, setActiveMenuItem } from "../../common/shared";
import { renderSettingsFields, settingsPageHtml } from "./render-settings";
import {getSettingsChange} from "./get-settings-change";

const settingsIconLink = require('../../assets/settings-icon.svg');

export const SETTINGS_NAME = 'Game Settings';
const SETTINGS_HTML = settingsPageHtml();
export const SETTINGS_ID = 'settings';
export const settingsIcon = settingsIconLink;

export const startSettingsPage = ():void => {
  setActiveMenuItem(SETTINGS_ID);
  addPageHtml(SETTINGS_HTML);
  renderSettingsFields();
  getSettingsChange();
}