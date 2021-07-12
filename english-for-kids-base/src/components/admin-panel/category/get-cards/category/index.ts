import { ServerCategory } from "../../../types";
import { ADMIN_ROUTE } from "../../../../../router/constants";

export const getCategoryCard = ({ name = '', id = '' }: ServerCategory): string => (`
  <div id="${id}" class="admin-category-card admin-card">
    <div class="admin-card-inner">
      <div class="delete-btn">X</div>
      <div class="admin-card-inner-regular">
        <div class="admin-card-title">${name}</div>
        <div class="admin-card-word-num">
           <span>Words:</span>
           <span class="words-num">8</span>
        </div>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit update-cat-btn">Update</button>
          <a href="#${ADMIN_ROUTE}/${id}" class="login-btn login-btn-cancel">Add word</a>
        </div>
      </div>
      <div class="admin-card-inner-edit">
        <label class="edit-cat-name">
          <span>Category Name</span>
          <input type="text" value="${name}">
        </label>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit new-cat-cancel">Cancel</button>
          <button class="login-btn login-btn-cancel new-cat-create">Update</button>
        </div>
      </div>
    </div>
  </div>
`)