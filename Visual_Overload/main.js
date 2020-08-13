const container = document.getElementById("container");
const randomColor = function(){
    const colors = ['#f9a653','#fd6382','#82ddbf','#66dcf2','#c195b9','#eee056','#e38537','#6a3ed6','#19813a','#92db3d']; 
    return colors[Math.floor(Math.random()* (colors.length-1))];
}

for (let i = 0; i < 7; i++) {
    const square = document.createElement("div"); 
    square.classList.add("square");
    square.onmouseleave = function(){
        this.style.backgroundColor = randomColor();
    }
    square.onmouseenter = function(){
        this.style.backgroundColor = randomColor();
    }
    square.style.backgroundColor = randomColor();
    container.appendChild(square);
}

