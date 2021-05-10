import { startAboutGamePage} from "./pages/about-game/about-game";
import { startBestScorePage, bestScoreId } from "./pages/best-score/best-score";
import { startSettingsPage, settingsId } from "./pages/settings/settings";
import { startGamePage, gameId } from "./pages/game/game";

const menuItems: HTMLCollection = document.getElementsByClassName('menu-item');

export function setActiveMenuItem(itemId: string) {
  for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }
  document.getElementById(itemId)?.classList.add('active');
}

function onHashChange() {
  const currentId = window.location.hash.slice(1);
  switch (currentId) {
    case bestScoreId:
      startBestScorePage();
      break;
    case settingsId:
      startSettingsPage();
      break;
    case gameId:
      startGamePage();
      break;
    default:
      startAboutGamePage();
      break;
  }
}

window.addEventListener("hashchange", onHashChange);
onHashChange();
