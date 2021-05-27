import {DEFAULT_CARDS_PACK, DEFAULT_DIFFICULTY} from "../../common/constants";

let cardsPack:string = DEFAULT_CARDS_PACK;
let difficulty:string = DEFAULT_DIFFICULTY;

const handleCardsPack = (event: Event):void => {
  cardsPack = (event.currentTarget as HTMLInputElement).value;
}

const handleDifficulty = (event: Event):void => {
  difficulty = (event.currentTarget as HTMLInputElement).value;
}

export const getSettings = ():Record<string, string> => ({
  cardsPack,
  difficulty,
});

const onSettingsChange = ():void => {
  const cardsPackSelect = document.getElementById('gameCards');
  cardsPackSelect?.addEventListener('change', handleCardsPack);

  const difficultySelect = document.getElementById('difficulty');
  difficultySelect?.addEventListener('change', handleDifficulty);
};

export const settingsBehavior = ():void => {
  onSettingsChange();
}