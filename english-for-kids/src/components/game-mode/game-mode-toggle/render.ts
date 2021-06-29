export const getGameModeBtn = (): string => (`
  <div class="game-mode-wrap">
    <label class="game-mode-btn">
      <input type="checkbox" id="gameModeCheckbox" class="game-mode-toggler">
      <span class="game-mode-toggler-inner">
          <span class="in-game">Game</span>
          <span class="in-train">Train</span>
      </span>
    </label>
  </div>
`)