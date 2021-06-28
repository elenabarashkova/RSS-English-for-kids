export const getWordCard = ({ word, name, imageUrl, translation, sound }: Word): string => (`
  <div id=${word} class="word-card card">
    <div class="card-inner">
      <div class="card-pic">
        <img src=${imageUrl} alt=${name}>
      </div>
      <div class="card-caption">
        <div class="caption-normal">
          <div class="caption-text name">${name}</div>
          <button class="turn-card-btn"></button>
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