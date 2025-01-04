const container = document.querySelector("#container");
// TODO : inconsistent sizing
container.style.width = "980px";
// TODO - get from user later
let columnsNumber = 64;

//placing divs in a grid
for (let i = 0; i < columnsNumber*columnsNumber; i++) {
    const div = document.createElement("div");  
    
    div.style.border = "1px solid blue"; 
    
    div.style.width = 960 / columnsNumber + "px";
    div.style.height = 960 / columnsNumber + "px";
    div.style.aspectRatio = 1/1;
    div.style.display = "flex";
    div.style.flexGrow = "1";

    div.addEventListener("mouseover", () => div.style.backgroundColor = "white");
    
    container.appendChild(div);    
    div.id = "div" + i;
}