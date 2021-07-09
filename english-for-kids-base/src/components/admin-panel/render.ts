import { ADMIN_ROUTE } from "../../router/constants";

export const getAdminPanelInner = (): string => (`
  <div id="AdminPanelPage" class="admin-panel-page">
    <nav class="admin-navigation">
      <div class="container">
        <ul class="admin-menu">
          <li class="admin-menu-item active">
            <a href="#${ADMIN_ROUTE}">Categories</a>
          </li>
          <li class="admin-menu-item">
            <span>Words</span>
          </li>
        </ul>
        <button id="logoutBtn" class="login-btn">Logout</button>
      </div>
    </nav>
    <h2>AdminPanel</h2>
  </div>
`)