import { getScores } from "../../common/indexedDB";
import { Scores } from "../../common/types";

const bestScorePageWrap = (): string => (`
  <div id="bestScorePage" class="best-score-page">
    <h2>Best Players</h2>
    <div id="bestScoreInner" class="best-score-list"></div>
  </div>
`);

const generateWinners = (scores: Array<Scores>): string =>
  scores
    .map(({firstName, lastName, email, userPhoto, score}) => (`
      <div class="best-score-item">
        <div class="winner-pic">
          <img src="${ userPhoto ?? './assets/user-default-pic.png' }" alt="${ firstName } ${ lastName }">
        </div>
        <div class="winner-info">
          <div class="winner-name">
            <span>${ firstName } </span>
            <span>${ lastName }</span>
          </div>
          <div class="winner-email">
            <span>${ email } </span>
          </div>
        </div>
        <div class="winner-score">
          <span>Score: </span>
          <span>${ score }</span>
        </div>
      </div>
    `))
    .join('');

const renderWinners = (scores: Array<Scores>): void => {

  const winnersHtml = generateWinners(scores);

  const bestScoreInner = document.getElementById('bestScoreInner');
  if (bestScoreInner) {
    bestScoreInner.innerHTML = winnersHtml;
  }
}

export const renderBestScore = (): void => {
  const mainHtml = document.getElementById('main');
  if (mainHtml) {
    mainHtml.innerHTML = bestScorePageWrap();
  }

  getScores(renderWinners);
}