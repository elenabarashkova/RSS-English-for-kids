import {getCurrentUser} from "../../common/indexedDB";

export const renderHeaderBtns = ():string =>
  (`
  <div class="header-item user-info not-registered">
    <button id="registerBtn" data-target="registerPopup" class="btn register-btn">register new player</button>
    <div class="with-user">
      <div class="user-pic">
        <img id="headerUserPic" src="./assets/user-default-pic.png" alt="User Picture">
      </div>
      <a href="#game" id="gameTumblerBtn" class="btn game-tumbler-btn menu-item">start game</a>
    </div>
  </div>
  `)

export const renderRegisteredHeader = ():void => {
  const headerUserInfo = document.querySelector('.header-item.user-info');
  headerUserInfo?.classList.remove('not-registered');

  const image = document.getElementById('headerUserPic');
  const {userPhoto} = getCurrentUser();
  if(userPhoto) {(image as HTMLImageElement).src = userPhoto}

  headerUserInfo?.classList.add('registered');
}