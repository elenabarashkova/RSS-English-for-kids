import {DEFAULT_CARDS_PACK, DEFAULT_DIFFICULTY} from "../../common/constants";

let cardsPack:string = DEFAULT_CARDS_PACK;
let difficulty:string = DEFAULT_DIFFICULTY;

export const getSettings = (event: Event):void => {
  const value = (event.currentTarget as HTMLInputElement)?.value;
  if((event.currentTarget as HTMLInputElement)?.getAttribute('name') === 'gameCards') {
    cardsPack = value;
  } else {
    difficulty = value;
  }
}

export const setSettings = () => ({
  cardsPack,
  difficulty,
});
