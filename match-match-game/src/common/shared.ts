export const createMain = (): void => {
  const main = document.createElement('main');
  main.id = 'main';
  main.classList.add('container');

  const body = document.querySelector('body');
  body?.append(main);
}

export const insertHtml = (insertPlace: HTMLElement, html: string) => {
  insertPlace.insertAdjacentHTML('beforeend', html);
}