import { ADMIN_ROUTE } from "../../router/constants";

export const getAdminPanelInner = (): string => (`
  <div id="AdminPanelPage" class="admin-panel-page">
    <nav class="admin-navigation">
      <div class="container">
        <ul class="admin-menu">
          <li id="adminMenuCategory" class="admin-menu-item active">
            <a href="#${ADMIN_ROUTE}">Categories</a>
          </li>
          <li id="adminMenuWord" class="admin-menu-item">
            <span>Words</span>
          </li>
        </ul>
        <button id="logoutBtn" class="login-btn">Logout</button>
      </div>
    </nav>
    <div id="adminPanelPageInner" class="admin-panel-page-inner"></div>
  </div>
`)