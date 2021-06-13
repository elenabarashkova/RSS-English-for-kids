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