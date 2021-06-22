const closeMenu = (): void => {
  const aside = document.getElementById('menu');
  const menuInner = document.getElementById('menuInner');
  const toggleBtn = document.getElementById('menuToggler');

  const closeMenuHandler = (event: Event) => {
    if (event.target !== menuInner) {
      [toggleBtn, menuInner, aside].forEach(elem => elem?.classList.remove('opened'));
    }
    aside?.removeEventListener('click', closeMenuHandler);
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