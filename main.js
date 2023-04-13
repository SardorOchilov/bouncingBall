"use strict";
import randomPosition from "./modules/randomPositon.js";
import updatePosition from "./modules/updatePosition.js";
import touchEachOther from "./modules/touchEachOther.js";
// ball 1
const ball1 = {
  ball: document.querySelector(".ball-1"),
  Position: 0,
  velx: 3,
  vely: 5,
};

// ball 2
const ball2 = {
  ball: document.querySelector(".ball-2"),
  Position: 0,
  velx: 5,
  vely: 2,
};

// generate first random position of balls
ball1.Position = randomPosition(ball1.ball);
ball2.Position = randomPosition(ball2.ball);

// update balls positions evenly
function ballMovement() {
  let { x: x1, y: y1 } = ball1.Position;
  let { x: x2, y: y2 } = ball2.Position;
  x1 += 100;
  y1 += 100;
  x2 += 100;
  y2 += 100;

  if (Math.abs(y1 - y2) <= 200 && Math.abs(x1 - x2) <= 200) {
    if (Math.abs(x1 - x2) <= 70) {
      ball1.vely = -ball1.vely;
      ball2.vely = -ball2.vely;
    } else if (Math.abs(x1 - x2) <= 100) {
      ball1.velx = -ball1.velx;
      ball1.vely = -ball1.vely;
      ball2.velx = -ball2.velx;
      ball2.vely = -ball2.vely;
    } else {
      ball1.velx = -ball1.velx;
      ball2.velx = -ball2.velx;
    }
  }
  ball1.Position = updatePosition(ball1);
  ball2.Position = updatePosition(ball2);

  requestAnimationFrame(ballMovement);
}
ballMovement();
