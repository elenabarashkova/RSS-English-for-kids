export const startPreGameTimer = (callback: CallableFunction):void => {
  let remainingTime = 30;
  const preGameTimer = document.getElementById('preGameTimer');
  const preGameTimerClock = document.getElementById('preGameTimerClock');

  const timer = setInterval(() => {
    if (remainingTime === -1) {
      clearTimeout(timer);
      preGameTimer?.classList.add('hidden');
      callback();
    } else {
      if(preGameTimerClock) {
        preGameTimerClock.innerHTML = `${remainingTime} seconds`;
      }
      remainingTime--;
    }
  }, 1000);
};