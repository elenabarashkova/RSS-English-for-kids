import store from "../redux/core/store";
import { SERVER_ADDRESS_GARAGE, SERVER_ADDRESS_WINNERS, WINNERS_LIMIT } from "./constants";
import { startPopup } from "../modules/garage/race/popup";
import { getWinnersPageNumber } from "../shared";
import { setWinnersList } from "../redux/actions";

export const createWinner = async (winner: Winner):Promise<void> => {
  try {
    const winnerExisting = await (await fetch(`${SERVER_ADDRESS_WINNERS}/${winner.id}`)).json();

    if(!winnerExisting.id) {
      await fetch(`${SERVER_ADDRESS_WINNERS}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(winner),
      });
    } else {
      const newWinner = {
        ...winnerExisting,
        wins: winnerExisting.wins + 1,
        time: winnerExisting.time > winner.time ? winner.time : winnerExisting.time,
      }

      await fetch(`${SERVER_ADDRESS_WINNERS}/${newWinner.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWinner),
      });
    }
    const state = store.getState();
    const winnerName = state.carsList.find((car: Car) => car.id === winner.id).name;
    startPopup(winnerName, state.currentWinner.time);

  } catch(error) {
    alert('Error creating the winner. Please, try again');
  }
}

export const getWinners = async (sortBy='id',orderBy='ASC'):Promise<void> => {
  const pageNum = getWinnersPageNumber();

  const page = `_page=${pageNum}`;
  const limit = `_limit=${WINNERS_LIMIT}`;
  const sort = `_sort=${sortBy}`;
  const order = `_order=${orderBy}`;

  const response = await fetch(`${SERVER_ADDRESS_WINNERS}?${page}&${limit}&${sort}&${order}`);
  const total = parseInt(response.headers.get('X-Total-Count') as string, 10);

  const result = await response.json();

  const winnersList = await Promise.all(result.map(async (winner: Winner): Promise<Winner> => {
    const car = await (await fetch(`${SERVER_ADDRESS_GARAGE}/${winner.id}`)).json();

    return {
      ...winner,
      ...car,
    }
  }));

  setWinnersList(winnersList as WinnersList, total);
}