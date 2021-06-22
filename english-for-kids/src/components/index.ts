import { getMenu } from "./menu/get-menu";
import { openMenu } from "./menu";

const getMain = (): string => (`
  <main id="main"></main>
`)

const getFooter = (): string => (`
  <footer id="footer" class="footer">
    <div class="footer-container">
      <a class="github" href="https://github.com/elenabarashkova" target="_blank">elenabarashkova</a>
      <div>2021</div>
      <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
        <span class="rss-year">'21</span>
      </a>
    </div>
  </footer>
`)

export const initCommonPageTemplate = (): void => {
  document.body.insertAdjacentHTML('beforeend', getMenu());
  document.body.insertAdjacentHTML('beforeend', getMain());
  document.body.insertAdjacentHTML('beforeend', getFooter());

  openMenu(); // -> rename into menu behavior?
}