const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Starting point at the bootm center of the Canvas
let x = canvas.width / 2;
let y = canvas.height - 30;
// Defining small values to make it appear the ball is moving
let dx = 2;
let dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
  }

  setInterval(draw, 10);


// function draw() {
//     // Whole rectangle will be cleared of any content.
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, Math.PI * 2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
//     // Update x & y with dx & dy variable on every frame.
//     // This will make the ball be painted on the new position every update.
//     x += dx;
//     y += dy;
//   }