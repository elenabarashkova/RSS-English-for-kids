import { ServerWord } from "../admin-panel/types";

export const getWordCard = ({ id, name, imageurl, translation, soundurl }: ServerWord): string => (`
  <div id=${id} class="word-card card">
    <div class="card-inner">
      <div class="card-pic">
        <img src=${imageurl || '../../assets/default.jpeg'} alt=${name}>
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
        <audio src=${soundurl}></audio>
      </div>
    </div>
  </div>
`)