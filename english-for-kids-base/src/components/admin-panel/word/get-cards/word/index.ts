import { ServerWord } from "../../../types";

export const getWordCard = ({ id, name, translation, imageurl, soundurl }: ServerWord): string => (`
  <div id="${id}" class="admin-word-card admin-card">
    <div class="admin-card-inner">
      <div class="delete-btn">X</div>
      <div class="admin-card-inner-regular">
        <div class="admin-card-word-title"><span class="word-title">Name: </span>${name}</div>
        <div class="admin-card-word-title"><span class="word-title">Translation: </span>${translation}</div>
        <div class="admin-card-word-title">
          <span class="word-title">Sound: </span>
          <span class="word-sound">${name}.mp3</span> 
          <audio src="${soundurl}"></audio>
        </div>
        <div class="admin-card-word-title">
          <span class="word-title">Image: </span>
          <div class="pic">
            <img src="${imageurl}" alt="">
          </div>
        </div>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit update-cat-btn">Update</button>
        </div>
      </div>
    </div>
  </div>
`)