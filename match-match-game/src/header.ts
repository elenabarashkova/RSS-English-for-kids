const mainHtml = document.getElementById('main');
const aboutGameHtml = '<div>About game</div>';
const bestScoreHtml = '<div>Best score</div>';
const settingsHtml = '<div>Settings</div>';
const menuItems: HTMLCollection = document.getElementsByClassName('menu-item');

function setActiveMenuItem(itemId: string) {
  for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }
  const current = document.getElementById(itemId);
  current?.classList.add('active');
}
function startAboutGamePage() {
  setActiveMenuItem('aboutGameBtn');
  window.location.hash = 'aboutGameBtn';
  if(mainHtml) {
    mainHtml.innerHTML = aboutGameHtml;
  }
}

function startBestScorePage() {
  setActiveMenuItem('bestScoreBtn');
  if(mainHtml) {
    mainHtml.innerHTML = bestScoreHtml;
  }
}

function startSettingsPage() {
  setActiveMenuItem('settingsBtn');
  if(mainHtml) {
    mainHtml.innerHTML = settingsHtml;
  }
}
function onHashChange() {
  const currentId = window.location.hash.slice(1);
  switch (currentId) {
    case 'aboutGameBtn':
      startAboutGamePage();
      break;
    case 'bestScoreBtn':
      startBestScorePage();
      break;
    case 'settingsBtn':
      startSettingsPage();
      break;
    default:
      startAboutGamePage();
      break;
  }
}

window.addEventListener("hashchange", onHashChange);
onHashChange();

