import { MENU_ITEMS } from "../constants";

const renderMenuItems = (): string =>
  MENU_ITEMS
    .map(({id, name, icon}) => (`
      <li id=${ id } class="menu-item">
        <a href="#${ id }" class="menu-link">
          <div class="menu-item-icon">
            ${ icon }
          </div>
          <span>${ name }</span>
        </a>
      </li>
    `))
    .join('');

export const renderMenu = (): string => (`
  <nav class="header-item">
    <ul id="menu" class="menu">
      ${ renderMenuItems() }
    </ul>
  </nav>
`);
