const about = document.querySelector("#top");
const aboutBtn = document.querySelector("#aboutBtn");

const badges = document.querySelector("#badges");
const badgesBtn = document.querySelector("#badgesBtn");

const skills = document.querySelector("#skills");
const skillsBtn = document.querySelector("#skillsBtn");

const projects = document.querySelector("#projects");
const projectsBtn = document.querySelector("#projectsBtn");

aboutBtn.addEventListener("click", function() {
  about.scrollIntoView();
});

badgesBtn.addEventListener("click", function() {
  badges.scrollIntoView();
});

skillsBtn.addEventListener("click", function() {
  skills.scrollIntoView();
});

projectsBtn.addEventListener("click", function() {
  projects.scrollIntoView();
});