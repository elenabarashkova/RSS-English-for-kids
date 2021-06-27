import store from "./store";
import { CURRENT_PAGE, START_GAME, STOP_GAME, TOGGLE_GAME_MODE } from "./action-types";

export const toggleGameModeAction = ():void => {
  store.dispatch({
    type: TOGGLE_GAME_MODE,
  });
}

export const startGameAction = ():void => {
  store.dispatch({
    type: START_GAME,
  });
}

export const stopGameAction = ():void => {
  store.dispatch({
    type: STOP_GAME,
  });
}

export const setCurrentPageAction = (page: string):void => {
  store.dispatch({
    type: CURRENT_PAGE,
    payload: page,
  });
}