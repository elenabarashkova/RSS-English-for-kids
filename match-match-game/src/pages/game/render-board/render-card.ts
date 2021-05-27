export const renderCard = (cardsNum: number, picturePack:string, pairNumber: number):HTMLElement => {
  const card = document.createElement('div');
  card.classList.add('card', 'flip');

  card.setAttribute('data-pair_num', String(pairNumber));

  card.innerHTML =
    (`
    <div class="card-inner">
      <img class="front-face" src=assets/${picturePack}/${pairNumber}.png alt="Card-fontface">
      <img class="back-face" src="assets/card-backside.png" alt="Card-backface">
    </div>
    `);

  return card;
};