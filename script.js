function toggleDarkMode() {
  document.body.classList.toggle("darkModeEnabled");
  document.getElementById("moon").style.display =
    document.body.classList.contains("darkModeEnabled") ? "none" : "block";
  document.getElementById("sun").style.display =
    document.body.classList.contains("darkModeEnabled") ? "block" : "none";
}
