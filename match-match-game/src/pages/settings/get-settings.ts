import {DEFAULT_CARDS_PACK, DEFAULT_DIFFICULTY} from "../../common/constants";

let cardsPack:string = DEFAULT_CARDS_PACK;
let difficulty:string = DEFAULT_DIFFICULTY;

export const handleSettings = (event: Event):void => {
  const value = (event.currentTarget as HTMLInputElement)?.value;

  const tagretName = (event.currentTarget as HTMLInputElement)?.getAttribute('name');

  if(tagretName === 'gameCards') {
    cardsPack = value;
  } else {
    difficulty = value;
  }
}

export const getSettings = ():Record<string, string> => ({
  cardsPack,
  difficulty,
});