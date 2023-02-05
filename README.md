# 2D-Breakout-Game
Learning JavaScript by recreating a classic 2D-Breakout Game following the [mdn web docs tutorial](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)

## Overview
This project includes functions, variables, arrays, objects, if-else statements and loops. Vanilla JavaScript will first be used and then updating the tutorial to modern JS syntax using OOP. Here, I bundled my code and converted it to Typescript.

## How to play
Destroy the bricks with the ball to earn points! Use the left & right keyboard arrows or mouse cursor to control the paddle. Each game has three lives and will lose a life if paddle fails to deflect the ball. Once all the bricks have been destroyed the game has been completed.

## Breakout Structure

```bash
|- /dist
  |- bundle.js
  |- index.html
|- /TS
  |- background.ts
  |- ball.ts
  |- brick.ts
  |- bricks.ts
  |- index.ts
  |- main.ts
  |- paddle.ts
  |- sprite.ts
  |- text.ts
|- /JSON
  |- package-lock.json
  |- package.json
  |- tsconfig.json
|- /lint
  |- package-lock.json
  |- package.json
|- node_modules
|- .eslintrc.js
|- .gitignore
|- README.md
|- webpack.config.js

```
## Quick Glimpse

https://github.com/mxrtydluffy/2D-Breakout-Game/blob/breakout-ts/demo_pic.png?raw=true

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)]