var topProject = document.getElementById("guitar-image");

var projects = [];

projects.push({
  modal: document.getElementById("guitar-modal"),
  image: document.getElementById("guitar-image"),
});

projects.push({
  modal: document.getElementById("sudoku-modal"),
  image: document.getElementById("sudoku-image"),
});

projects.push({
  modal: document.getElementById("chiro-modal"),
  image: document.getElementById("chiro-image"),
});

projects.push({
  modal: document.getElementById("react-modal"),
  image: document.getElementById("react-image"),
});

projects.push({
  modal: document.getElementById("portfolio-modal"),
  image: document.getElementById("portfolio-image"),
});

projects.push({
  modal: document.getElementById("infinite-modal"),
  image: document.getElementById("infinite-image"),
});

// Get the <span> elements and their parents
document.querySelectorAll(".close").forEach((item) => {
  item.addEventListener("click", (event) => {
    let parent = item.parentElement;
    parent.parentElement.style.display = "none";
    topProject.scrollIntoView({ behavior: "smooth" });
  });
});

// adding event listeners for images
projects.forEach((item) => {
  item.image.addEventListener("click", (event) => {
    item.modal.style.display = "block";
    item.modal.scrollIntoView({ behavior: "smooth" });
  });
});
