const about = document.querySelector("#top");
const aboutBtn = document.querySelector("#aboutBtn");

const experience = document.querySelector("#experience");
const experienceBtn = document.querySelector("#experienceBtn");

const badges = document.querySelector("#badges");
const badgesBtn = document.querySelector("#badgesBtn");

const skills = document.querySelector("#skills");
const skillsBtn = document.querySelector("#skillsBtn");

const projects = document.querySelector("#projects");
const projectsBtn = document.querySelector("#projectsBtn");

const contact = document.querySelector("#contact");
const contactBtn = document.querySelector("#contactBtn");

aboutBtn.addEventListener("click", function () {
  about.scrollIntoView();
});

skillsBtn.addEventListener("click", function () {
  skills.scrollIntoView();
});

experienceBtn.addEventListener("click", function () {
  experience.scrollIntoView();
});

badgesBtn.addEventListener("click", function () {
  badges.scrollIntoView();
});

projectsBtn.addEventListener("click", function () {
  projects.scrollIntoView();
});

contactBtn.addEventListener("click", function () {
  contact.scrollIntoView();
});
