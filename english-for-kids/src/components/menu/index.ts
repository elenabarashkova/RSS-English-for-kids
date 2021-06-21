export const openMenu = (): void => {
  const toggleBtn = document.getElementById('menuToggler');

  toggleBtn?.addEventListener('click', () => {
    toggleBtn.classList.toggle('opened');
  })
}