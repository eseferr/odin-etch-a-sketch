const container = document.querySelector(".container");
for (i = 0; i < 16; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("line");
  container.appendChild(newDiv);
}

const lines = document.querySelectorAll(".line");
lines.forEach((element) => {
  for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grids");
    element.appendChild(newDiv);
  }
});

const grids = document.querySelectorAll(".grids");
grids.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "#000";
  });
});
