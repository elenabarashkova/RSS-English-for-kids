export const setActiveMenuItem = (itemId: string):void => {
  const MENU_ITEMS: HTMLCollection = document.getElementsByClassName('menu-item');
  [...MENU_ITEMS].forEach(item => item.classList.remove('active'));
  document.getElementById(itemId)?.classList.add('active');
}

export const addPageHtml = (html: string):void => {
  const mainHtml = document.getElementById('main');
  if(mainHtml) { mainHtml.innerHTML = html}
}