import store from "../../../redux/store";
import { isGameStartedAction, mistakesCountAction, toggleGameModeAction } from "../../../redux/actions";
import { GAME_MODES } from "../../../shared/constants";

export const gameModeBtnBehavior = (): void => {
  document.getElementById('gameModeCheckbox')?.addEventListener('click', () => {
    toggleGameModeAction();
    document.getElementById('mainWrap')?.classList.toggle('in-game');

    const state = store.getState();
    const { gameMode } = state;

    if(gameMode === GAME_MODES.TRAIN) {
      isGameStartedAction(false);
      mistakesCountAction(false);
    }
  })
}