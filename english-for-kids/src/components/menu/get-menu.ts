import { ROUTES } from "../../router/constants";

export const getMenu = (): string => (`
  <aside id="menu">
    <button id="menuToggler" class="menu-toggler">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul>
      <li><a href="#${ROUTES.MAIN}">Main</a></li>
      
    </ul>
  </aside>
`)
