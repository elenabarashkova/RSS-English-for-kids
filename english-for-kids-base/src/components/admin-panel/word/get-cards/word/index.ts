import { ServerWord } from "../../../types";

const imgDefaultUrl = '../../../../../assets/default.jpeg';

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
            <img src="${imageurl || imgDefaultUrl}" alt="">
          </div>
        </div>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit update-cat-btn">Update</button>
        </div>
      </div>
      <div class="admin-card-inner-edit">
        <label class="edit-word">
          <span>Name</span>
          <input type="text" class="edit-word-name" value='${name}' required>
        </label>
        <label class="edit-word">
          <span>Translation</span>
          <input type="text"  class="edit-word-translation" value='${translation}' required>
        </label>
        <label class="edit-word">
          <span>Image</span>
          <input type="file" class="edit-word-image">
        </label>
        <label class="edit-word">
          <span>Audio</span>
          <input type="file" class="edit-word-audio">
        </label>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit new-cat-cancel">Cancel</button>
          <button class="login-btn login-btn-cancel new-cat-create">Update</button>
        </div>
      </div>
    </div>
  </div>
`);