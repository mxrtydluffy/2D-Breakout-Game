/*
.getContext - Draws on the canvas
*/

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/* 

    Presents Red Rectangle

    - .beginPath() | Doesn't draw anything but told context a new drawing has started since
    its making something new.
    - .rect(x position, y position (down from the top), width, height) | Create rectangle 
    - fillStyle() | Adds color like adding paint. Doesn't draw anything.
    - .fill() | Since the area on the canvas is marked, new drawing has started and define rectangle
    and marked area on the canvas the area will be filled with the color. This will make 
    - .closePath()| Doesn't do anything visual but it closes and from that point can start a new one.
*/

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

/* 
    Presents green circle.

    - .beginPath() | Starts a new drawing
    - .arc(x, y, radius, startAngle, endAngle) | Draws arcs much like a compass
        - startAngle is calcualted in radians. In degrees it's 0 - 360° in radians it's 0 - 6.28 (2 * PI)
*/

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();


// Draws outline of the rectangle. Similar to code above.

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
// ctx.fill() this would fill the rectangle color
ctx.closePath();