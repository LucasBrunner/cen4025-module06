let lightmodeStorageKey = "lightmode";
let lightmodeClass = "light-mode";
let darkmodeClass = "dark-mode";
let lightmodeToggleButton = "lightmodeToggleButton";

function onPageLoad() {
  checkLightmode();
  setModifiedDate();
}

function setModifiedDate() {
  var elements = Array.from(document.getElementsByClassName("appendModifiedDate"));
  elements.forEach(element => {
    element.textContent += new Date(document.lastModified).toISOString().substring(0, 10);
  });
}

function toggleLightmode() {
  if (document.body.className == lightmodeClass) {
    setLightmode(darkmodeClass);
    document.getElementById(lightmodeToggleButton).innerText = "Light Mode"
  } else {
    setLightmode(lightmodeClass);
    document.getElementById(lightmodeToggleButton).innerText = "Dark Mode"
  }
}

function setLightmode(lightmode) {
  document.body.className = lightmode;
  localStorage.setItem(lightmodeStorageKey, lightmode)
}

function checkLightmode() {
  var lightmodeState = localStorage.getItem(lightmodeStorageKey);
  if (lightmodeState !== null) {
    document.body.className = lightmodeState;

    // Toggle twice to get the correct button text.
    toggleLightmode();
    toggleLightmode();
  }
}