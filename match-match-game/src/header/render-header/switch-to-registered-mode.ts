import { getCurrentUser } from "../../common/indexedDB";

export const switchToRegisteredMode = (): void => {
  const headerUserInfo = document.querySelector('.header-item.user-info');
  headerUserInfo?.classList.remove('not-registered');

  const image = document.getElementById('headerUserPic');
  const {userPhoto} = getCurrentUser();
  if (userPhoto) {
    (image as HTMLImageElement).src = userPhoto
  }

  headerUserInfo?.classList.add('registered');
}