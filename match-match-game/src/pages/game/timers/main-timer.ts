let mainTimer: NodeJS.Timeout;
let seconds = 0;
let minutes = 0;
let hours = 0;

export const startMainTimer = ():void => {
  document.getElementById('gameTimer')?.classList.remove('hidden');

  const hour = document.getElementById('hours');
  const mins = document.getElementById('minutes');
  const secs = document.getElementById('seconds');

  hours = 0;
  minutes = 0;
  seconds = 0;

  mainTimer = setInterval(():void => {
    seconds = +seconds + 1;
    if( seconds === 60 ) {
      seconds = 0;
      minutes = +minutes + 1;
      if( minutes === 60 ) {
        minutes = 0;
        hours = +hours + 1;
      }
    }
    if(secs){secs.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;}
    if(mins){mins.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;}
    if(hour){hour.innerText = `${hours < 10 ? '0' : ''}${hours}`;}
  },1000);
};

export const stopTimer = ():void => {
  clearTimeout(mainTimer);
}

export const getGameDurationSec = ():number => hours * 3600 + minutes * 60 + seconds;
export const getGameDuration = ():string => (`
  ${hours ? `${hours} hours` : ''} ${minutes ? `${minutes} minutes` : ''} ${seconds} seconds
`);