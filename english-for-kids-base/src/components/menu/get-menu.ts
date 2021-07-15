import { CATEGORY_ROUTE, MENU_ITEMS } from "../../router/constants";
import { ServerCategory, ServerCategoryList } from "../admin-panel/types";

const getSubMenuItem = ({ name, id }: ServerCategory): string => (`
  <li id='${id}Page' class="menu-item">
    <a href="#${CATEGORY_ROUTE}/${id}">${name}</a>  
  </li>
`)

export const renderSubMenuItems = (categoriesList: ServerCategoryList): void => {
  const subMenuList = document.getElementById('subMenuList');
  const subMenuItems = categoriesList.map((category) => getSubMenuItem(category)).join('');

  if(subMenuList) {
    subMenuList.innerHTML = '';
  }

  subMenuList?.insertAdjacentHTML('afterbegin', subMenuItems);
}

const getLink = (route: string, name: string): string => (`
  <a href="#${route}">${name}</a> 
`)

const getSpan = (name: string): string => (`
  <span>${name}</a> 
`)

const getMenuItem = (route: string, { name, subcategory }: MenuItem): string => (`
  <li id='${route}Page' class="menu-item">
    ${subcategory ? getSpan(name) : getLink(route, name)}
    ${subcategory ? '<ul id="subMenuList" class="menu-list sub"></ul>' : ''}
  </li>
`)

export const getMenu = (): string => (`
  <aside id="menu" class="aside">
    <button id="menuToggler" class="menu-toggler">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div id="menuInner" class="menu-inner">
      <nav id="navigation" class="navigation">
        <ul class="menu-list">
          ${(Object.keys(MENU_ITEMS)).map((route: string) => getMenuItem(route, MENU_ITEMS[route])).join('')}
        </ul>
      </nav>
      <button id="loginBtn" class="login-btn">Login</button>
    </div>
  </aside>
`)
