import {getScores} from "../../common/indexedDB";

export const bestScorePageHtml = ():string =>
  (`
  <div id="bestScorePage" class="best-score-page">
    <h2>Best Players</h2>
    <div id="bestScoreInner" class="best-score-list"></div>
  </div>
  `);

const render = (scores: Array<{
  email: string,
  firstName: string,
  lastName: string,
  userPhoto: string,
  score: number}>) => {

  const html = scores.map(({firstName, lastName, email,userPhoto, score}) =>
    (`
    <div class="best-score-item">
      <div class="winner-pic">
        <img src="${userPhoto ?? './assets/user-default-pic.png'}" alt="${firstName} ${lastName}">
      </div>
      <div class="winner-info">
        <div class="winner-name">
          <span>${firstName} </span>
          <span>${lastName}</span>
        </div>
        <div class="winner-email">
          <span>${email} </span>
        </div>
      </div>
      <div class="winner-score">
        <span>Score: </span>
        <span>${score}</span>
      </div>
    </div>
    `)).join('');

  const bestScoreInner = document.getElementById('bestScoreInner');
  if(bestScoreInner) { bestScoreInner.innerHTML = html;}
}

export const renderBestScore = ():void => {
  getScores(render);
}