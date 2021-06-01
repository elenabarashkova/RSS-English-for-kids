export const renderGaragePage = () => {
  const html = (`
    <div id="garagePage" class="Garage">
      <h2>Garage</h2>
    </div>
  `);
  const header = document.querySelector('header');
  header?.insertAdjacentHTML('beforeend', html);
}

export const removeGaragePage = () => {
  const garagePage = document.getElementById('garagePage');
  garagePage?.remove();
}