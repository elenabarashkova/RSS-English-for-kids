import store from "./store";
import { TOGGLE_GAME_MODE } from "./action-types";

export const toggleGameMode = ():void => {
  store.dispatch({
    type: TOGGLE_GAME_MODE,
  });
}