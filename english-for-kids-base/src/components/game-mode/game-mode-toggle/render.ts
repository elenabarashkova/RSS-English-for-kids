export const getGameModeBtn = (isTrainMode = true): string => (`
  <div id="gameModeTogglBtn" class="game-mode-wrap">
    <label class="game-mode-btn">
      <input type="checkbox" id="gameModeCheckbox" class="game-mode-toggler" ${isTrainMode? '' : 'checked'}>
      <span class="game-mode-toggler-inner">
          <span class="in-game">Game</span>
          <span class="in-train">Train</span>
      </span>
    </label>
  </div>
`)