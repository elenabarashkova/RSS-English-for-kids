import { ABOUT_GAME_ID, ABOUT_GAME_NAME, aboutGameIcon } from "../pages/about-game/about-game";
import {BEST_SCORE_ID, BEST_SCORE_NAME, bestScoreIcon } from "../pages/best-score/best-score";
import {SETTINGS_ID, SETTINGS_NAME, settingsIcon } from "../pages/settings/settings";

export const renderMenu = () => {
  const menuItems = [
    {
      id: ABOUT_GAME_ID,
      name: ABOUT_GAME_NAME,
      icon: aboutGameIcon,
    },
    {
      id: BEST_SCORE_ID,
      name: BEST_SCORE_NAME,
      icon: bestScoreIcon,
    },
    {
      id: SETTINGS_ID,
      name: SETTINGS_NAME,
      icon: settingsIcon,
    },
  ]

  const html = menuItems.map(({id, name, icon}) =>
    (`<li id=${id} class="menu-item">
          <a href="#${id}" class="menu-link">
            <div class="menu-item-icon">
              ${icon}
            </div>
            <span>${name}</span>
          </a>
        </li>`
    )).join('');
  const menu = document.getElementById('menu');
  if(menu) {
    menu.innerHTML = html;
  }
};