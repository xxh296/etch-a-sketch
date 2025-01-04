const container = document.querySelector("#container");
container.style.width = "960px";

let columnsNumber = 64;

// reset with a columnsNumber supplied by user
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => collectColumnsNumber());

function collectColumnsNumber() {
    let rawInput = parseInt(prompt("Enter a valid number (<=100), or accept the default: ", "64"));
    while (isNaN(rawInput) || rawInput < 0 || rawInput > 100) {
        rawInput = parseInt(prompt("Enter a valid number (<=100), or accept the default: ", "64"));
    }
    columnsNumber = rawInput;
    placeDivs();    
}

//placing divs in a grid
function placeDivs() {
    //clear any existing divs first
    container.innerHTML = "";

    for (let i = 0; i < columnsNumber*columnsNumber; i++) {
        const div = document.createElement("div");  
        
        div.style.width = 960 / columnsNumber + "px";
        div.style.height = 960 / columnsNumber + "px";
        div.style.aspectRatio = 1/1;
        div.style.display = "block";

        div.addEventListener("mouseover", () => div.style.backgroundColor = randomizeColor());
        
        container.appendChild(div);    
        //div.id = "div" + i;
    }
}

function randomizeColor() {
    return "rgb(" + Math.round(Math.random()*100) + " " 
        + Math.round(Math.random()*100) + " " 
        + Math.round(Math.random()*100) + ")";
}

placeDivs();