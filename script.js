const container = document.getElementById("grid-container")
const colorpicker = [... document.querySelectorAll(".colorpicker")]


let gridSize = 32
var pointerDown = false
var currentColor = "#1a1a1a"

document.addEventListener("mousedown", () => {
  pointerDown = true
})
document.addEventListener("mouseup", () => {
  pointerDown = false
})

colorpicker.forEach(picker => {
  picker.style.backgroundColor = picker.dataset.color
  picker.addEventListener("click", ()=> {
    currentColor = picker.dataset.color
  })
  
});

function createGrid(gridSize) {
  for (let i = 0; i < gridSize*gridSize; i++) { 
    let squares = document.createElement("div")
    squares.classList.add("squares")
    squares.attributes.d
    squares.addEventListener("mouseover", (event) => {
      if (pointerDown) {
        event.target.style.backgroundColor = currentColor
      } 
    })
    squares.addEventListener("dragstart", (event) => {
      event.preventDefault()
    })
    // squares.addEventListener("mouseleave", (element) => {
    //   setTimeout(() => {
    //     element.target.style.backgroundColor = "transparent"}, 500)
    // })
    container.appendChild(squares)
  }

  container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
  container.style.gridTemplateRows = `repeat(${gridSize},1fr)`
}

createGrid(gridSize)

function resizeGrid() {
  gridSize = parseInt(prompt("Please input the grid size, Input between 10 and 100")) 

  if (gridSize < 10 || gridSize > 100) {
    resizeGrid()
    return
  }
  
  container.replaceChildren()

  createGrid(gridSize)
}

function reset() {  
  container.childNodes.forEach(element => {
    element.style.backgroundColor = "transparent"
  });
}

function setColor(color) {
  
}