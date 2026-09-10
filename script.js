document.getElementById("year").textContent = new Date().getFullYear();

const THEME_KEY = "theme";
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  if (theme === "dark" || theme === "light") {
    root.setAttribute("data-theme", theme);
  } else {
    root.removeAttribute("data-theme");
  }
}

function currentTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (e) {
    return null;
  }
}

applyTheme(currentTheme());

toggle.addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const active = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
  const next = active === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (e) {
    /* ignore */
  }
});
