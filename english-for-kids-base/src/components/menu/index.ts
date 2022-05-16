const closeMenu = (): void => {
  const aside = document.getElementById('menu');
  const menuInner = document.getElementById('menuInner');
  const toggleBtn = document.getElementById('menuToggler');

  const closeMenuHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    const targetMenuInner = target.closest('#menuInner');

    if (!targetMenuInner || target instanceof HTMLAnchorElement) {
      [toggleBtn, menuInner, aside].forEach(elem => elem?.classList.remove('opened'));

      aside?.removeEventListener('click', closeMenuHandler);
    }
  };

  if(aside?.classList.contains('opened')) {
    aside?.addEventListener('click', closeMenuHandler);
  }
}

export const openMenu = (): void => {
  const toggleBtn = document.getElementById('menuToggler');
  const menuInner = document.getElementById('menuInner');
  const aside = document.getElementById('menu');

  toggleBtn?.addEventListener('click', () => {
    [toggleBtn, menuInner, aside].forEach(elem => elem?.classList.add('opened'));
    setTimeout(closeMenu);
  })
}

export const setActiveMenuItem = (page: string): void => {
  const menuItem = document.getElementById(`${page}Page`);
  const menuItems = document.getElementsByClassName('menu-item');

  [...menuItems].map(item => item.classList.remove('active'));
  menuItem?.classList.add('active');
}