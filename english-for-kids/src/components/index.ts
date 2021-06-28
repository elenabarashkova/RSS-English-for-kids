import { getMenu } from "./menu/get-menu";
import { openMenu } from "./menu";
import { getGameModeBtn } from "./game-mode/game-mode-btn/render";
import { gameModeBtnBehavior } from "./game-mode/game-mode-btn";

const getMain = (): string => (`
  <main id="main">
    ${getGameModeBtn()}
    <div id="mainWrap"></div>
  </main>
`)

const githubIcon = require('../assets/github.svg');
const rssIcon = require('../assets/rss.svg');

const getFooter = (): string => (`
  <footer id="footer" class="footer">
    <div class="container">
      <div class="footer-item">
        ${githubIcon}
        <a class="github" href="https://github.com/elenabarashkova" target="_blank">elenabarashkova</a>
      </div>
      <div class="footer-item">
        <span class="footer-year">2021</span>
      </div>
      <div class="footer-item">
        ${rssIcon}
        <a class="rss" href="https://rs.school/js/" target="_blank">
          <span class="rss-year">'21</span>
        </a>
      </div>
    </div>
  </footer>
`)

export const initCommonPageTemplate = (): void => {
  const container = document.createElement('div');
  container.classList.add('container');

  document.body.appendChild(container);
  container.insertAdjacentHTML('beforeend', getMenu());
  container.insertAdjacentHTML('beforeend', getMain());
  document.body.insertAdjacentHTML('beforeend', getFooter());

  openMenu();
  gameModeBtnBehavior();
}