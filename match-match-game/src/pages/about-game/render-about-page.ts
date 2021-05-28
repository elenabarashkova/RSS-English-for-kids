const aboutPageWrap = (): string => (`
  <div class="about-game">
    <h2>How to play?</h2>
    <div id="instructionsList" class="instructions-list"></div>
  </div>
`);

const generateInstructionsItems = (): string => {
  const instructionsItems = [
    {text: 'Register new player in game',},
    {text: 'Configure your game settings',},
    {text: 'Start you new game! Remember card positions and match it before times up.',},
  ];

  return instructionsItems
    .map(({text}, index) => (`
      <div class="instructions-item">
        <div class="instructions-text">
          <div class="instructions-text-inner">
            <span class="step-number">${ index + 1 }</span>
            <span class="text">${ text }</span>
          </div>   
        </div>
        <div class="instructions-pic">
          <img src="./assets/about-step-${ index + 1 }.png" alt="about-step-${ index + 1 }">
        </div>
      </div>
      `))
    .join('');
}

export const initAboutPage = (): void => {
  const mainHtml = document.getElementById('main');
  if (mainHtml) {
    mainHtml.innerHTML = aboutPageWrap()
  }

  const instructionsList = document.getElementById('instructionsList');
  if (instructionsList) {
    instructionsList.innerHTML = generateInstructionsItems()
  }
}