import store from "./store";
import {
  MISTAKES_COUNT,
  NEXT_CURRENT_WORD,
  SET_CURRENT_PAGE,
  START_GAME,
  STOP_GAME,
  TOGGLE_GAME_MODE
} from "./action-types";

export const toggleGameModeAction = ():void => {
  store.dispatch({
    type: TOGGLE_GAME_MODE,
  });
}

export const startGameAction = (wordsInPlay:WordsListConfig):void => {
  store.dispatch({
    type: START_GAME,
    payload: wordsInPlay,
  });
}

export const stopGameAction = ():void => {
  store.dispatch({
    type: STOP_GAME,
  });
}

export const setCurrentPageAction = (page: string):void => {
  store.dispatch({
    type: SET_CURRENT_PAGE,
    payload: page,
  });
}

export const changeCurrentWordAction = ():void => {
  store.dispatch({
    type: NEXT_CURRENT_WORD,
  });
}

export const mistakesCountAction = ():void => {
  store.dispatch({
    type: MISTAKES_COUNT,
  });
}