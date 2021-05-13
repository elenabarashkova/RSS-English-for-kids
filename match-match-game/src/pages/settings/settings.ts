import {addPageHtml, setActiveMenuItem} from "../../common/shared";

const settingsHtml = '<div>Settings</div>';
export const settingsId = 'settings';

export function startSettingsPage() {
  setActiveMenuItem(settingsId);
  addPageHtml(settingsHtml);
}