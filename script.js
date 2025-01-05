const container = document.querySelector("#container");
container.style.width = "960px";

let columnsNumber = 16;

// reset the canvas 
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => collectColumnsNumber());

function collectColumnsNumber() {
    let rawInput = parseInt(prompt("Enter a valid number (<=100), or accept the default: ", "16"));
    while (isNaN(rawInput) || rawInput < 0 || rawInput > 100) {
        rawInput = parseInt(prompt("Enter a valid number (<=100), or accept the default: ", "16"));
    }
    columnsNumber = rawInput;
    drawCanvas();    
}

//placing divs on a grid
function drawCanvas() {
    container.innerHTML = "";

    for (let i = 0; i < columnsNumber*columnsNumber; i++) {
        const div = document.createElement("div");  
        
        div.style.width = 960 / columnsNumber + "px";
        div.style.height = 960 / columnsNumber + "px";
        div.style.aspectRatio = 1/1;
        div.style.display = "inline-block"; // changed
        div.style.opacity = 0; // added        

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getRandomRgba();   
            
            // Added: Increase the opacity (limit to 1)
            let currentOpacity = parseFloat(div.style.opacity) || 0;
            if (currentOpacity < 1) {
                currentOpacity += 0.1; // Increase by 0.1
                div.style.opacity = currentOpacity.toFixed(1);  // Confine to 0-1 range
            }
        });
        
        container.appendChild(div);
        //div.id = "div" + i;
    }
}

function getRandomRgba() {
    return "rgba(" 
        + Math.round(Math.random()*100) + " " 
        + Math.round(Math.random()*100) + " " 
        + Math.round(Math.random()*100) + " / " + "1" + ")";
}

drawCanvas();