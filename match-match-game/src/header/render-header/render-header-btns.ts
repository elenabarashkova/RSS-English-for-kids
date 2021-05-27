export const renderHeaderBtns = ():string => (`
  <div class="header-item user-info not-registered">
    <button id="registerBtn" data-target="registerPopup" class="btn register-btn">register new player</button>
    <div class="with-user">
      <div class="user-pic">
        <img id="headerUserPic" src="./assets/user-default-pic.png" alt="User Picture">
      </div>
      <a href="#game" id="gameTumblerBtn" class="btn game-tumbler-btn menu-item">start game</a>
    </div>
  </div>
`);