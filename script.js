const container = document.getElementById("container")

function createGrid(gridSize) {
  for (let i = 0; i < gridSize*2; i++) { 
    let squares = document.createElement("div")
    squares.classList.add("squares")
    container.appendChild(squares)
  }
}