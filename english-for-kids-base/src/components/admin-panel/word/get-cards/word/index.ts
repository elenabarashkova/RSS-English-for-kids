import { ServerWord } from "../../../types";

export const getWordCard = ({ id, name, translation, imageurl, soundurl, category_id }: ServerWord): string => (`
  <div id="${id}" class="admin-category-card admin-card">
    <div class="admin-card-inner">
      <div class="delete-btn">X</div>
      <div class="admin-card-inner-regular">
        <div class="admin-card-title">${name}</div>
        <div class="admin-card-title">${translation}</div>
        <div class="pic">
          <img width="200px" src="${imageurl}" alt="">
        </div>
        <div class="admin-card-title">${category_id}</div>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit update-cat-btn">Update</button>
        </div>
      </div>
    </div>
  </div>
`)