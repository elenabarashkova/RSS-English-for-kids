const getLogin = (): string => (`
  <div id="login" class="login">
    <div class="login-inner">
      <h2 class="login-title">Login</h2>
      <form action="#" id="loginForm" class="login-form">
        <label class="login-field">
          <span class="login-text">Username</span>
          <input type="text" placeholder="admin" required>
        </label>
        <label class="login-field">
          <span class="login-text">Password</span>
          <input type="text" placeholder="admin" required>
        </label>
        <div class="login-btns-wrap">
          <button id="submitLogin" class="login-btn login-btn-submit">Login</button>
          <button id="cancelLogin" class="login-btn login-btn-cancel">Cancel</button>
        </div>
     </form>
    </div>
  </div>
`);

export const renderLogin = (): void => {
  document.body.insertAdjacentHTML('beforeend', getLogin());
}

export const removeLogin = (): void => {
  const login = document.getElementById('login');
  login?.remove();
}