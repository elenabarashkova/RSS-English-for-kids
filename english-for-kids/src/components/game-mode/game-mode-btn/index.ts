import { toggleGameMode } from "../../../redux/actions";

export const gameModeBtnBehavior = (): void => {
  document.getElementById('gameModeCheckbox')?.addEventListener('click', () => {
    toggleGameMode();
    document.getElementById('mainWrap')?.classList.toggle('in-game');
  })
}