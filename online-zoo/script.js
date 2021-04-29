// Dark theme
const darkThemeToggle = document.getElementById('toggle-button');
const body = document.querySelector('body');
darkThemeToggle.addEventListener("change", function() {
  if (darkThemeToggle.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
