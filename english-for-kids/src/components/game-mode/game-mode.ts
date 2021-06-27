import { startGameAction } from "../../redux/actions";

export const startBehaviorGame = (): void => {
  const startGameBtn = document.getElementById('startGameBtn');
  console.log(startGameBtn);

  startGameBtn?.addEventListener('click', () => {
    console.log('click test');
    startGameAction();
  });

    // startGame();
    // add class to main wrap gameStarted &&add styles for stars and repeatbtn and startgameBtn
    // start game
}

export const stopBehaviorGame = (): void => {
  // const startGameBtn = document.getElementById('startGameBtn');
  // startGameBtn?.removeEventListener('click', startGame);
  // stopGameAction();
  console.log('stop card behavior GAME');
}