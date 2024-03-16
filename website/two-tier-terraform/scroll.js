const pageTop = document.querySelector("#top");
const topBtn = document.querySelector("#topBtn");

const projects = document.querySelector("#projects");
const projectsBtn = document.querySelector("#projectsBtn");

topBtn.addEventListener("click", function() {
  pageTop.scrollIntoView();
});

projectsBtn.addEventListener("click", function() {
  projects.scrollIntoView();
});