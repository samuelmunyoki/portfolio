function toggleDarkMode() {
  document.body.classList.toggle("darkModeEnabled");
  document.getElementById("moon").style.display =
    document.body.classList.contains("darkModeEnabled") ? "none" : "block";
  document.getElementById("sun").style.display =
    document.body.classList.contains("darkModeEnabled") ? "block" : "none";
}
// Function to make the API request
function fetchProjects() {
  fetch("https://api.github.com/users/samuelmunyoki")
    .then((response) => response.json())
    .then((data) => {
      // Update the number of projects
      document.getElementById("projects").innerText =
        data.public_repos;
    })
    .catch((error) => {
      console.error("Error fetching projects:", error);
      document.getElementById("projects").innerText = "x";
    });
}

// Call the fetchProjects function on page load
window.onload = fetchProjects;
