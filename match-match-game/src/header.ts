const mainHtml = document.getElementById('main');
const aboutGameHtml = '<div>About game</div>';
const bestScoreHtml = '<div>Best score</div>';
const settingsHtml = '<div>Settings</div>';

const menuItems: HTMLCollection = document.getElementsByClassName('menu-item');

function getPageName(id: string) {
    switch (id) {
        case 'aboutGameBtn':
            return aboutGameHtml;
        case 'bestScoreBtn':
            return bestScoreHtml;
        case 'settingsBtn':
            return settingsHtml;
        default:
            return aboutGameHtml;
    }
}

function onMenuClick() {
    for(let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }
    const currentId = (window.location.hash).slice(1);
    const current = document.getElementById(currentId);
    current?.classList.add('active');
    if(mainHtml) {
        mainHtml.innerHTML = getPageName(currentId);
    }
}

// for(let i = 0; i < menuItems.length; i++) {
//     menuItems[i].addEventListener('click', onMenuClick);
// }
window.addEventListener("hashchange", onMenuClick, false);


