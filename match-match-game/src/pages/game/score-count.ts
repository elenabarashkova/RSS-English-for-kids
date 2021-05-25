import { getCompareCount, getMistakenCompareCount } from "./game-behavior";
import { getGameDuration } from "./timers/main-timer";

export const countScore = () => {
  const mistakenCompareCount = getMistakenCompareCount();
  const compareCount = getCompareCount();
  const gameDuration = getGameDuration();
  const score = (compareCount - mistakenCompareCount) * 100 - gameDuration * 10;
  return score > 0 ? score : 0;
}


