const MENU_ITEMS: HTMLCollection = document.getElementsByClassName('menu-item');

export const setActiveMenuItem = (itemId: string) => {
  [...MENU_ITEMS].forEach(item => item.classList.remove('active'));
  document.getElementById(itemId)?.classList.add('active');
}

export const insertHtml = (element: string) => {
  const template = document.createElement('template');
  template.innerHTML = element;
  const child = template.content.firstChild as Node;
  const body = document.querySelector('body');
  if(body) {
    body.appendChild(child);
  }
}

export const addPageHtml = (html: string) => {
  const mainHtml = document.getElementById('main');
  if(mainHtml) {
    mainHtml.innerHTML = html;
  }
}