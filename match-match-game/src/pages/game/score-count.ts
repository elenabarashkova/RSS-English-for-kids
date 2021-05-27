import { getCompareCount, getMistakenCompareCount } from "./game-behavior";
import { getGameDurationSec } from "./timers/main-timer";

export const countScore = ():number => {
  const mistakenCompareCount = getMistakenCompareCount();
  const compareCount = getCompareCount();
  const gameDuration = getGameDurationSec();

  const score = (compareCount - mistakenCompareCount) * 100 - gameDuration * 10;

  return score > 0 ? score : 0;
}


