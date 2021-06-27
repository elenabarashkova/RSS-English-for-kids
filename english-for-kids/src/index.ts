import "./style.css";
import store from "./redux/store";
import { initCommonPageTemplate } from "./components";
import { startRouter } from "./router";
import { gameModeBehaviorToggle, gameStartTrack } from "./components/game-mode";
import { startBehaviorTrain } from "./components/game-mode/train-mode";
import { GameState } from "./redux/interface";

window.addEventListener('load', () => {
  initCommonPageTemplate();
  startRouter();
  startBehaviorTrain();

  store.subscribe(():void => {
    const state = store.getState();

    gameModeBehaviorToggle((state.game as GameState).gameMode);
    gameStartTrack((state.game as GameState).isGameStarted);
  });
})

// ++todo: на старт игры класть конфиг текущих слов в state
// todo: сложить рандомно в array все звуки конфига
// todo: звук играет ->
// 1.1 Нажимают кнопку repeat : звук повторяется
// 1.2 Нажимают карточку - ее проверяют
// 1.2.1 Карточка неправильная -> появляется пустая звездочка, звучит звук WRONG, счетчик карточки Wrong += 1
// 1.2.2. Карточка правильная -> появляется полная звездочка,звучит звук CORRECT, текущий звук - удаляется,
//        карточке дается свойство - Correct + она становится disabled, счетчик карточки Correct +=1;