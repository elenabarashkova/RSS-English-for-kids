export const renderPreGameTimer = ():HTMLElement => {
  const preGameTimer = document.createElement('div');
  preGameTimer.id = 'preGameTimer';

  preGameTimer.innerHTML = (`
    <div>Remember all cards before the time runs out.</div>
    <div id="preGameTimerClock"></div>
  `);

  return preGameTimer;
}

export const renderMainTimer = ():HTMLElement => {
  const timer = document.createElement('div');
  timer.id = 'gameTimer';
  timer.classList.add('hidden');

  timer.innerHTML= (`
    <span id="hours">00</span><span>:</span>
    <span id="minutes">00</span><span>:</span>
    <span id="seconds">00</span>
  `);
  
  return timer;
}