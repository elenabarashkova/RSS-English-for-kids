import { ServerCategory, ServerCategoryList } from "../types";

const getCategoryCard = ({ name = '', id = '' }: ServerCategory): string => (`
  <div id=${id} class="admin-category-card admin-card">
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
          <button class="login-btn login-btn-cancel">Add word</button>
        </div>
      </div>
      <div class="admin-card-inner-edit">
        <label class="edit-cat-name"><input type="text"></label>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit new-cat-cancel">Cancel</button>
          <button class="login-btn login-btn-cancel new-cat-create">Update</button>
        </div>
      </div>
    </div>
  </div>
`)

const getCreateCategoryCard = (): string => (`
  <div id='createCategoryCard' class="admin-category-card admin-card create-cat-card">
    <div class="admin-card-inner">
      <div class="admin-card-title">Create new category</div>
      <div class="addNewCatBtn"></div>
    </div>
  </div>
`)

const getNewCategoryCard = (): string => (`
  <div class="admin-category-card admin-card new-cat-card">
    <div class="admin-card-inner">
      <div class="admin-card-inner-edit">
        <label class="edit-cat-name">Category Name<input type="text"></label>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit new-cat-cancel">Cancel</button>
          <button class="login-btn login-btn-cancel new-cat-create">Create</button>
        </div>
      </div>
    </div>
  </div>
`)

export const renderCateroryCards = (serverCatList: ServerCategoryList): string => (`
  <div id="adminCardWrap" class="admin-categiries-wrap">
    ${serverCatList.map((cat: ServerCategory) => {
    if(cat.isNewCategory) {
      return getNewCategoryCard();
    }
    return getCategoryCard(cat);
  }).join('')}
    ${getCreateCategoryCard()}
  </div>
`);