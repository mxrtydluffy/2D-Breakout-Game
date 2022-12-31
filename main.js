const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Starting point at the bottom center of the Canvas
let x = canvas.width / 2;
let y = canvas.height - 30;
// Defining small values to make it appear the ball is moving
let dx = 2;
let dy = -2;
// Detects collision if ball touches the wall.
const ballRadius = 10;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // Ball bouncing off from the left and right
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    // Ball bouncing off from top edge and bottom edge 
    if (y + dy > canvas.height || y + dy < ballRadius) {
      dy = -dy;
    }

    x += dx;
    y += dy;
  }

  setInterval(draw, 10);