export const getWordCard = ({ name, imageUrl, translation }: Word): string => (`
  <div class="category-card card">
    <div class="category-card-inner">
      <div class="category-card-pic">
        <img src=${imageUrl} alt=${name}>
      </div>
      <div class="category-card-caption">
        <div>${name}</div>
        <button class="turnCardBtn">Turn</button>
<!--        <div>${translation}</div>-->
      </div>
    </div>
  </div>
`)