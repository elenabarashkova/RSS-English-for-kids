export const body = document.querySelector('body');
let mainHtml: HTMLElement | null;

const MENU_ITEMS: HTMLCollection = document.getElementsByClassName('menu-item');

export function setActiveMenuItem(itemId: string) {
  for(let i = 0; i < MENU_ITEMS.length; i++) {
    MENU_ITEMS[i].classList.remove('active');
  }
  document.getElementById(itemId)?.classList.add('active');
}

export function insertHtml(element: string) {
  const template = document.createElement('template');
  template.innerHTML = element;
  const child = template.content.firstChild as Node;
  if(body) {
    body.appendChild(child);
  }
}

export function addMain() {
  mainHtml = document.getElementById('main');
}

export function addPageHtml(html: string) {
  if(mainHtml) {
    mainHtml.innerHTML = html;
  }
}