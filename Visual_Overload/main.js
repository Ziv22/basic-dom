const squares = 2;
const squaresModel = [];
const container = document.getElementById("container");
let messageArea = document.getElementById('message-area');

const randomColor = function(){
    const colors = ['#f9a653','#fd6382','#82ddbf','#66dcf2','#c195b9','#eee056','#e38537','#6a3ed6','#19813a','#92db3d']; 
    return colors[Math.floor(Math.random() * (colors.length-1))];
}
const updateModel = function(id,color){
    squaresModel[id] = color ;
}
const displayMessage = function(){
    let message = document.createElement('h1');
    message.innerHTML = "Good Job ;)"
    messageArea.appendChild(message);
};

const allEqual = arr => arr.every( v => v === arr[0])

const ifSame = function(){
    let equal = allEqual(squaresModel);
    if(equal){
        displayMessage();
    }
}

for (let i = 0; i < squares; i++) {
    const square = document.createElement("div"); 
    square.classList.add(`square`);
    
    square.onmouseenter = function(){
        this.style.backgroundColor = randomColor();
        updateModel(i,square.style.backgroundColor);
        ifSame();
    }
    square.style.backgroundColor = randomColor();
    updateModel(i,square.style.backgroundColor);
    container.appendChild(square);
}

