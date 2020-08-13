const playingField = document.getElementById("playing-field")
const ball = document.getElementById("block")

ball.style.backgroundColor = "yellow";

// ball.style.top = 0;
// ball.style.left = 0;
const moveOnX = function(val){
    ball.style.left = `${val}px`
}
const moveOnY = function(val){
    ball.style.top = `${val}px`
}

const moveUp = function(){
    let up = parseInt(ball.style.top) || 0;
    up -= 15;
    moveOnY(up);
}

const moveRight = function(){
    let left = parseInt(ball.style.left) || 0;
    left += 15;
    moveOnX(left);
}

const moveDown = function(){
    let down = parseInt(ball.style.top) || 0;
    down += 15;
    moveOnY(down);
}

const moveLeft = function(){
    let left = parseInt(ball.style.left) || 0;
    left -= 15;
    moveOnX(left);
}

const leftBtn   = document.getElementById("left");
const upBtn     = document.getElementById("up");
const rightBtn  = document.getElementById("right");
const downBtn   = document.getElementById("down");

rightBtn.onclick = function(){
    moveRight();
}


downBtn.onclick = function(){
    moveDown();
}

upBtn.onclick = function(){
    moveUp();
}

leftBtn.onclick = function(){
    moveLeft();
}


  
  