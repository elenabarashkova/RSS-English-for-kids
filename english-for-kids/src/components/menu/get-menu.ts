import { ROUTES } from "../../router/constants";

const getSubMenuItem = ({ name, url }: Category): string => (`
  <li id='${url}Page' class="menu-item">
    <a href="#${ROUTES.CATEGORY.url}/${url}">${name}</a>  
  </li>
`)

const getSubMenu = (subcategory: CategoriesListConfig): string => (`
  <ul class="menu-list sub">
    ${(Object.keys(subcategory)).map((category: string) => getSubMenuItem(subcategory[category])).join('')}
  </ul>
`)

const getLink = (url: string, name: string): string => (`
  <a href="#${url}">${name}</a> 
`)

const getSpan = (name: string): string => (`
  <span>${name}</a> 
`)

const getMenuItem = ( { url, name, subcategory }: Route): string => (`
  <li id='${url}Page' class="menu-item">
    ${subcategory ? getSpan(name) : getLink(url, name)}
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
          ${(Object.keys(ROUTES)).map((route: string) => getMenuItem(ROUTES[route])).join('')}
        </ul>
      </nav>
      <button id="login" class="login">Login</button>
    </div>
  </aside>
`)
