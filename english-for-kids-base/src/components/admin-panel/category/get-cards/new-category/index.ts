export const getNewCategoryCard = (): string => (`
  <div class="admin-category-card admin-card new-cat-card">
    <div class="admin-card-inner">
      <div class="admin-card-inner-edit">
        <label class="edit-cat-name">
          <span>Category Name</span>
          <input type="text">
        </label>
        <div class="login-btns-wrap">
          <button class="login-btn login-btn-submit new-cat-cancel">Cancel</button>
          <button class="login-btn login-btn-cancel new-cat-create">Create</button>
        </div>
      </div>
    </div>
  </div>
`)