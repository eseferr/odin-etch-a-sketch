let gridSize = 16;
createGrid();
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (selectedGridSize < 100) {
    selectedGridSize = parseInt(prompt());
    deleteGrid();
    createGrid(selectedGridSize);
  }
});

function createGrid(gridSize = 16) {
  const container = document.querySelector(".grid-container");
  for (i = 0; i < gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("line");
    container.appendChild(newDiv);
  }
  const lines = document.querySelectorAll(".line");
  lines.forEach((element) => {
    for (let i = 0; i < gridSize; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("grids");
      element.appendChild(newDiv);
    }
    draw();
  });
}
function deleteGrid() {
  const lines = document.querySelectorAll(".line");
  lines.forEach((element) => {
    element.remove();
  });
}
function draw() {
  const grids = document.querySelectorAll(".grids");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "#000";
    });
  });
}
