import { ROUTES } from "../../router/constants";

export const getMenu = (): string => (`
  <aside id="menu">
    <ul>
      <li><a href="#${ROUTES.MAIN}">Main</a></li>
      
    </ul>
  </aside>
`)
