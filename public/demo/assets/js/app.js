const windowObj = window.parent;
const parentRootElement = windowObj.document.documentElement;
const parentStyle = getComputedStyle(parentRootElement);
const currentStyle = getComputedStyle(document.documentElement);

console.log(currentStyle);
const setTheme = () => {
  const theme = parentRootElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", theme);

  const colors = {
    text: parentStyle.getPropertyValue("--sl-color-text"),
    accentLow: parentStyle.getPropertyValue("--sl-color-accent-low"),
    accentHigh: parentStyle.getPropertyValue("--sl-color-accent-high"),
    accent: parentStyle.getPropertyValue("--sl-color-accent"),
    black: parentStyle.getPropertyValue("--sl-color-black"),
    white: parentStyle.getPropertyValue("--sl-color-white"),
    gray6: parentStyle.getPropertyValue("--sl-color-gray-6"),
    hairline: parentStyle.getPropertyValue("--sl-color-hairline"),
  };

  document.documentElement.style.setProperty("--ol-base-color", colors.gray6);
  document.documentElement.style.setProperty("--ol-text-color-1", colors.text);
  document.documentElement.style.setProperty("--ol-main-color", colors.accent);
  document.documentElement.style.setProperty("--ol-accent-color", colors.accentHigh);
  document.documentElement.style.setProperty("--ol-dark-color", colors.black);
  document.documentElement.style.setProperty("--ol-gray-color", colors.gray6);
  document.documentElement.style.setProperty("--ol-light-color", colors.white);
  document.documentElement.style.setProperty("--ol-border-color-1", colors.hairline);
};

setTheme();

windowObj.addEventListener("change", () => {
  setTheme();
});
