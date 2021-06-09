import { changePageNumber } from "../redux/actions";

export const pagination = () => {
  const prevPage = document.getElementById('prevPage');
  const nextPage = document.getElementById('nextPage');

  prevPage?.addEventListener('click', () => {
    changePageNumber(-1);
  })

  nextPage?.addEventListener('click', () => {
    changePageNumber(1);
  })
}

export const disablePagination = (pageNumber: number, maxPageNumber: number) => {
  const prevPage = document.getElementById('prevPage') as HTMLButtonElement;

  if (pageNumber === 1) {
  prevPage.setAttribute('disabled', '');
  } else {
    prevPage.removeAttribute('disabled');
  }

  const nextPage = document.getElementById('nextPage') as HTMLButtonElement;
  if (pageNumber === maxPageNumber) {
    nextPage.setAttribute('disabled', '');
  } else {
    nextPage.removeAttribute('disabled');
  }

}
