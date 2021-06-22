export const openMenu = (): void => {
  const toggleBtn = document.getElementById('menuToggler');

  toggleBtn?.addEventListener('click', () => {
    toggleBtn.classList.toggle('opened');
    // todo: activate action - change state to MENU_OPENED => add subscriber that shows menu
    // or: change parent's id="menu" class on opened & add function that shows menul l bb
  })
}