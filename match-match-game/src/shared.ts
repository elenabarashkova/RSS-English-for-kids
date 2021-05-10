export const body = document.querySelector('body');
export const mainHtml = document.getElementById('main');

const menuItems: HTMLCollection = document.getElementsByClassName('menu-item');

export function setActiveMenuItem(itemId: string) {
  for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }
  document.getElementById(itemId)?.classList.add('active');
}