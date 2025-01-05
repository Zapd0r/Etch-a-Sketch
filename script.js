const container = document.getElementById("gridContainer")
const colorpicker = [...document.querySelectorAll(".colorpicker")]
const knobX = document.getElementById("knobX")
const knobY = document.getElementById("knobY")
const knobspeed = 500

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

container.addEventListener("mousemove", (event) => {
    mouseX = (event.pageX / innerWidth) * knobspeed
    mouseY = (event.pageY / innerHeight) * knobspeed

    if (pointerDown) {
        knobX.style.rotate = `${mouseX}deg`
        knobY.style.rotate = `${mouseY}deg`
    }
})

// add eventlistener to colorselection and setting variable
colorpicker.forEach((picker) => {
    picker.style.backgroundColor = picker.dataset.color
    picker.addEventListener("click", () => {
        colorpicker.forEach((picker) => {
            picker.classList.remove("active")
        })
        currentColor = picker.dataset.color
        picker.classList.add("active")
    })
})

// create the grid by filling it with squares that all have an eventlistener for settint the color
// preventDefault for disable dragging of squares
function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let squares = document.createElement("div")
        squares.classList.add("squares")
        squares.attributes.d
        squares.addEventListener("mousemove", (event) => {
            if (pointerDown) {
                colorSquare(event.target, currentColor)
            }
        })
        squares.addEventListener("click", (event) => {
            colorSquare(event.target, currentColor)
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
    gridSize = parseInt(
        prompt("Please input the grid size, Input between 10 and 100")
    )
		
    if (gridSize < 10 || gridSize > 100 || isNaN(gridSize)) {
        resizeGrid()
        return
    }

    //clearing the current children
    container.replaceChildren()
    createGrid(gridSize)
}

// resetfunction to clear the etch-a-sketch
function reset() {
    container.childNodes.forEach((element) => {
        colorSquare(element, "transparent")
    })
}

function colorSquare(element, color) {
    element.style.backgroundColor = color
}