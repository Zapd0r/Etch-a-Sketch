const container = document.getElementById("grid-container")
const colorpicker = [... document.querySelectorAll(".colorpicker")]
const knobX = document.getElementById("knobX")
const knobY = document.getElementById("knobY")

let gridSize = 32
var pointerDown = false
var currentColor = "#1a1a1a"
var mouseX, mouseY

// enable/disable drawing when mousebutton is pressed
container.addEventListener("mousedown", () => {
  pointerDown = true
})
container.addEventListener("mouseup", () => {
  pointerDown = false
})

document.addEventListener("mousemove", (event) => {
  mouseX = (event.pageX ) * Math.PI
  mouseY = (event.pageY ) * Math.PI

  if(pointerDown) {
  knobX.style.rotate = `${mouseX}deg`
  knobY.style.rotate = `${mouseY}deg`
}
})

// add eventlistener to colorselection and setting variable
colorpicker.forEach(picker => {
  picker.style.backgroundColor = picker.dataset.color
  picker.addEventListener("click", ()=> {
    currentColor = picker.dataset.color
  })
})

// create the grid by filling it with squares that all have an eventlistener for settint the color
// preventDefault for disable dragging of squares
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
    container.appendChild(squares)
  }

  // resizing the grid template based on the provided gridsize
  container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
  container.style.gridTemplateRows = `repeat(${gridSize},1fr)`
}

createGrid(gridSize)

// resize function for the button
function resizeGrid() {
  gridSize = parseInt(prompt("Please input the grid size, Input between 10 and 100")) 

  if (gridSize < 10 || gridSize > 100) {
    resizeGrid()
    return
  }

  //clearing the current children
  container.replaceChildren()
  createGrid(gridSize)
}

// resetfunction to clear the etch-a-sketch
function reset() {  
  container.childNodes.forEach(element => {
    element.style.backgroundColor = "transparent"
  })
}

function setColor(color) {
  
}