import Game from './main';

const canvas = document.getElementById('myCanvas');
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const game = new Game(canvas, ctx);