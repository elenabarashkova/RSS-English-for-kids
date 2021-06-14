export const switchDisabledState = (btnToDisable: HTMLElement, btnToAble: HTMLElement): void => {
  btnToDisable?.setAttribute('disabled', '');
  btnToAble?.removeAttribute('disabled');
};

export const getElement = (name: string, id: string): HTMLElement => (
  document.querySelector(`${name}[data-id='${id}']`) as HTMLElement
);

export const getGaragePageNumber = (): number => (
  parseInt(window.location.hash.slice(1).split('&')[0].split('=')[1], 10)
);

export const getWinnersPageNumber = (): number => (
  parseInt(window.location.hash.slice(1).split('&')[1].split('=')[1], 10)
);

export const disablePagination = (
  maxPageNumber: number,
  { prevPageId, nextPageId, currentPageNum }: PaginationConfig
): void => {
  const prevPage = document.getElementById(`${prevPageId}`) as HTMLButtonElement;
  const nextPage = document.getElementById(`${nextPageId}`) as HTMLButtonElement;

  if(!prevPage || !nextPage) {
    return;
  }

  const currentPage = currentPageNum();

  if (currentPage === 1) {
    prevPage.setAttribute('disabled', '');
  } else {
    prevPage.removeAttribute('disabled');
  }

  if (currentPage === maxPageNumber) {
    nextPage.setAttribute('disabled', '');
  } else {
    nextPage.removeAttribute('disabled');
  }
}