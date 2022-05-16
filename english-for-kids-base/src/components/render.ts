export const getMain = (): string => (`
  <main id="main">
    <div id="mainWrap"></div>
  </main>
`)

const githubIcon = require('../assets/github.svg');
const rssIcon = require('../assets/rss.svg');

export const getFooter = (): string => (`
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