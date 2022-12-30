/*
.getContext - Draws on the canvas
*/

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/* Draws rectangle on the scren */
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
