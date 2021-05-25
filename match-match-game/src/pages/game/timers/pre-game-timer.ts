let timer: NodeJS.Timeout;

export const stopPreGameTimer = ():void => {
  clearTimeout(timer);
}

export const startPreGameTimer = (callback: CallableFunction):void => {
  let remainingTime = 30;
  const preGameTimer = document.getElementById('preGameTimer');
  const preGameTimerClock = document.getElementById('preGameTimerClock');

  timer = setInterval(() => {
    if (remainingTime === -1) {
      stopPreGameTimer();
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