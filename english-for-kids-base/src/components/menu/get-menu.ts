import { CATEGORY_ROUTE, MENU_ITEMS } from "../../router/constants";

const getSubMenuItem = ({ name, url }: Category): string => (`
  <li id='${url}Page' class="menu-item">
    <a href="#${CATEGORY_ROUTE}/${url}">${name}</a>  
  </li>
`)

const getSubMenu = (subcategory: CategoriesListConfig): string => (`
  <ul class="menu-list sub">
    ${(Object.keys(subcategory)).map((category: string) => getSubMenuItem(subcategory[category])).join('')}
  </ul>
`)

const getLink = (route: string, name: string): string => (`
  <a href="#${route}">${name}</a> 
`)

const getSpan = (name: string): string => (`
  <span>${name}</a> 
`)

const getMenuItem = (route: string, { name, subcategory }: MenuItem): string => (`
  <li id='${route}Page' class="menu-item">
    ${subcategory ? getSpan(name) : getLink(route, name)}
    ${subcategory ? getSubMenu(subcategory) : ''}
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
