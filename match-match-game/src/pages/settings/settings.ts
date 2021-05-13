import {addPageHtml, setActiveMenuItem} from "../../common/shared";

const SETTINGS_HTML = '<div>Settings</div>';
export const SETTINGS_ID = 'settings';

export function startSettingsPage() {
  setActiveMenuItem(SETTINGS_ID);
  addPageHtml(SETTINGS_HTML);
}