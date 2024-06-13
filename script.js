const gridSizeInput = document.querySelector("#grid-input");
const gridUpdateBtn = document.querySelector(".update");
const grid = document.querySelector(".grid-div");
let squareArray = []; // Used to access squares later (might change)

function randomRGBValues() {
  let color1 = (Math.random() * 255).toFixed(0);
  let color2 = (Math.random() * 255).toFixed(0);
  let color3 = (Math.random() * 255).toFixed(0);
  
  return `${color1}, ${color2}, ${color3}`
}

function initialiseGridElements(num) {
  grid.replaceChildren();
  num = num * num;
  for (let i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    squareArray[i] = square;
    grid.appendChild(square);
    
    square.addEventListener("mouseover", () => {
      square.setAttribute("style", `background-color:rgb(${randomRGBValues()})`);
    })
  }
 }


 function initialiseMenu() {
  gridSizeInput.addEventListener("", () => {
    if (isNaN(gridSizeInput.value)) gridSizeInput.value = 0;
  })

  gridUpdateBtn.addEventListener("click", () => {
    if (parseInt(gridSizeInput.value) > 100) gridSizeInput.value = 100;
    initialiseGridElements(gridSizeInput.value);
  })
 }

// initialise all elements 16x16 = 256
initialiseMenu();
initialiseGridElements(16);