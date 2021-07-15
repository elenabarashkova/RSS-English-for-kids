import { SERVER_PATH } from "./constants";
import { setAllWordsListAction } from "../redux/actions";

export const getAllWords = async (): Promise<void> => {

  const response = await fetch(`${SERVER_PATH}words`);
  const result = await response.json();

  setAllWordsListAction(result);
}