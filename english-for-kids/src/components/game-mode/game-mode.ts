import { startGameAction } from "../../redux/actions";

export const startBehaviorGame = (): void => {
  const startGameBtn = document.getElementById('startGameBtn');

  startGameBtn?.addEventListener('click', startGameAction);
}

export const stopBehaviorGame = (): void => {
  const startGameBtn = document.getElementById('startGameBtn');
  startGameBtn?.removeEventListener('click', startGameAction);
  console.log('stop card behavior GAME');
}