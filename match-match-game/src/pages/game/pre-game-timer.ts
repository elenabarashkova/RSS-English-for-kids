import {startTimer} from "./main-timer";

export const preGameTimer = (callback: CallableFunction):void => {
  let remainingTime = 30;
  const preGameTimerEl = document.getElementById('preGameTimer');
  const preGameTimerClock = document.getElementById('preGameTimerClock');

  const timer = setInterval(() => {
    if (remainingTime === -1) {
      callback();
      clearTimeout(timer);
      preGameTimerEl?.classList.add('hidden');
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