import {startTimer} from "./timer";

export const beforeGameTimer = (callback: CallableFunction) => {
  let remainingTime = 30;
  const preGameTimer = document.getElementById('preGameTimer');
  const preGameTimerClock = document.getElementById('preGameTimerClock');

  const timer = setInterval(() => {
    if (remainingTime === -1) {
      callback();
      clearTimeout(timer);
      preGameTimer?.classList.add('hidden');
      document.getElementById('gameTimer')?.classList.remove('hidden');

      startTimer();
    } else {
      if(preGameTimerClock) {
        preGameTimerClock.innerHTML = `${remainingTime} seconds`;
      }
      remainingTime--;
    }
  }, 1000);
};