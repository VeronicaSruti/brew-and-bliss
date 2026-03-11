const toggleDesktop = document.getElementById("themeSwitch");
const toggleMobile = document.getElementById("themeSwitchMobile");
const html = document.documentElement;
function applyTheme(isCoffee) {
  html.setAttribute("data-theme", isCoffee ? "coffee" : "mocktail");
  toggleDesktop.checked = isCoffee;
  toggleMobile.checked = isCoffee;
  document.querySelectorAll(".reveal").forEach((el) => {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = "";
  });
}
toggleDesktop.addEventListener("change", () =>
  applyTheme(toggleDesktop.checked),
);
toggleMobile.addEventListener("change", () => applyTheme(toggleMobile.checked));
applyTheme(true);
document.querySelectorAll(".mood-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".mood-tab")
      .forEach((t) => t.classList.remove("active-tab"));
    tab.classList.add("active-tab");
  });
});
document.querySelectorAll(".flavor-chip").forEach((chip) => {
  chip.addEventListener("click", () => chip.classList.toggle("picked"));
});
