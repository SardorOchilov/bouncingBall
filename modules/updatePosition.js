export default function updatePosition(ball) {
  let { x, y } = ball.Position;
  if (x >= window.innerWidth-200 || x <= 0) {
    ball.velx = -ball.velx
  }
  if (y >= window.innerHeight-200 || y <= 0) {
    ball.vely = -ball.vely
  }

  x += ball.velx;
  y += ball.vely;

  ball.ball.style.left = `${x}px`;
  ball.ball.style.top = `${y}px`;
  
  return {x, y};
}
