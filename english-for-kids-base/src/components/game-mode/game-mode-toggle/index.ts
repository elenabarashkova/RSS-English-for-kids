import { toggleGameModeAction } from "../../../redux/actions";

export const gameModeBtnBehavior = (): void => {
  document.getElementById('gameModeCheckbox')?.addEventListener('click', () => {
    toggleGameModeAction();
    document.getElementById('mainWrap')?.classList.toggle('in-game');
  })
}