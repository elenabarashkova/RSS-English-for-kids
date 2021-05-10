import { mainHtml, setActiveMenuItem } from "../../shared";

const settingsHtml = '<div>Settings</div>';
export const settingsId = 'settings';

export function startSettingsPage() {
  setActiveMenuItem(settingsId);
  if(mainHtml) {
    mainHtml.innerHTML = settingsHtml;
  }
}