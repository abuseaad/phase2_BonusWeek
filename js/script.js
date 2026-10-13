const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);

const scale = 20;

// canvas takes half of the screen (rounded down to a multiple of scale)
canvas.width = Math.floor((window.innerWidth / 2) / scale) * scale;
canvas.height = Math.floor(window.innerHeight / scale) * scale;

const rows = canvas.height/scale
const columns = canvas.width/scale;

// score: 1 point for every food the snake eats
let score = 0;
const scoreBox = document.getElementById("score");

let snake = []; 
snake[0] = {
    x: (Math.floor(Math.random() * columns)) * scale,
    y:  (Math.floor(Math.random() * rows)) * scale,
}
let food = {
    x: (Math.floor(Math.random() * columns)) * scale,
    y:  (Math.floor(Math.random() * rows)) * scale,
}



let d = "right";

document.onkeydown = direction;

function direction(event){
    let key = event.keyCode;
    if(key ==37 && d !="right"){
        d = "left"
    }else if (key == 38 && d != "down"){
        d = "up"
    } else if (key ==39 && d != "left"){
        d = "right"
    } else if (key == 40 && d != "up"){
        d = "down"
    }
}

// ctx.fillStyle = "#ff0"
// ctx.strokeStyle = "pink"

// ctx.fillRect(snake[0], snake[0], scale,scale)
// ctx.strokeRect(snake[0].x, snake[0].y, scale, scale)


// call our draw function every 100 ms (moderate speed is the default)
let speed = 100;
let gameOver = false;
let playGame = setInterval(draw,speed);

// speed buttons: mild = 160ms, moderate = 100ms, fast = 50ms
const speedButtons = document.querySelectorAll(".speed-buttons button");
speedButtons.forEach(function(button){
    button.addEventListener("click", function(){
        speed = Number(button.dataset.speed);

        // highlight the selected button
        speedButtons.forEach(function(b){ b.classList.remove("active"); });
        button.classList.add("active");
        button.blur();   // so the arrow keys keep controlling the snake

        // restart the timer with the new speed (not after game over)
        if(!gameOver){
            clearInterval(playGame);
            playGame = setInterval(draw,speed);
        }
    });
});

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for(let i=0; i < snake.length; i++){

        ctx.fillStyle = "red";
        ctx.strokeStyle = "red";
        ctx.fillRect(snake[i].x, snake[i].y, scale,scale);
        ctx.strokeRect(snake[i].x, snake[i].y, scale, scale)
    }
    // console.log(snake);

    // Draw food,
    ctx.fillStyle = "#ff0";
    ctx.strokeStyle = "green";
    ctx.fillRect(food.x, food.y, scale, scale)
    ctx.strokeRect(food.x, food.y, scale, scale)

    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    // console.log(snakeX);

    // witch direction

    if(d == "left") snakeX -=scale;
    if(d == "up") snakeY -=scale;
    if(d == "right") snakeX +=scale;
    if(d == "down") snakeY +=scale;

    if(snakeX >= canvas.width){
        snakeX = 0;
    }
    if (snakeY >= canvas.height){
        snakeY = 0
    }
    if(snakeX < 0){
        snakeX = canvas.width - scale;
    }
    if(snakeY < 0){
        snakeY = canvas.height - scale;
    }

    // if the snake eats the food, it grows

    if(snakeX == food.x && snakeY == food.y){
        score++;
        scoreBox.textContent = score;
        food = {
            x:(Math.floor(Math.random() * columns)) * scale,
            y: (Math.floor(Math.random() * rows) ) * scale
        }
        // we don`t remove the tail
    } else {
        // remove the tail
        snake.pop();
    }

  

    let newHead = {
        x : snakeX,
        y: snakeY
    } 
    if(eatSelf(newHead, snake)){
        clearInterval(playGame)
        gameOver = true;
    }

    // snake.pop();
    snake.unshift(newHead);
}

// check if snake is eating itself
function eatSelf (head, array){
    for (let i=0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}