export const getNewWordCard = (): string => (`
  <div id="newWordForm" class="admin-word-card admin-card new-word-card">
    <div class="admin-card-inner">
      <div class="admin-card-inner-edit">
        <label class="edit-word">
          <span>Name</span>
          <input type="text" class="edit-word-name">
        </label>
        <label class="edit-word">
          <span>Translation</span>
          <input type="text"  class="edit-word-translation">
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
          <button class="login-btn login-btn-cancel new-cat-create">Create</button>
        </div>
      </div>
    </div>
  </div>
`)