import { ROUTES } from "../../router/constants";

const getSubMenuItem = ({ name, url }: Category): string => (`
  <li class="menu-item">
    <a href="#${ROUTES.CATEGORY.url}/${url}">${name}</a>  
  </li>
`)

const getSubMenu = (subcategory: CategoriesListConfig): string => (`
  <ul class="menu-list sub">
    ${(Object.keys(subcategory)).map((category: string) => getSubMenuItem(subcategory[category])).join('')}
  </ul>
`)

const getMenuItem = ( { url, name, subcategory }: Route): string => (`
  <li class="menu-item">
    <a href="#${url}">${name}</a>  
    ${subcategory ? getSubMenu(subcategory) : ''}
  </li>
`)

export const getMenu = (): string => (`
  <aside id="menu">
    <button id="menuToggler" class="menu-toggler">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div id="menuInner" class="menu-inner">
      <nav id="navigation">
        <ul class="menu-list">
          ${(Object.keys(ROUTES)).map((route: string) => getMenuItem(ROUTES[route])).join('')}
        </ul>
      </nav>
      <button id="login" class="login">Login</button>
    </div>
  </aside>
`)
