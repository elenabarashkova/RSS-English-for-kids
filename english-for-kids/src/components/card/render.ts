export const getWordCard = ({ name, imageUrl, translation, sound }: Word): string => (`
  <div class="category-card card">
    <div class="category-card-inner">
      <div class="category-card-pic">
        <img src=${imageUrl} alt=${name}>
      </div>
      <div class="category-card-caption">
        <div class="caption-normal">
          <div class="caption-text name">${name}</div>
          <button class="turnCardBtn">Turn</button>
        </div>
        <div class="caption-turned">
          <div class="caption-text translation">${translation}</div>
        </div>        
      </div>
      <div class="audio">
        <audio src=${sound}></audio>
      </div>
    </div>
  </div>
`)