export default function randomPostion(ball) {
  const x = Math.floor(Math.random() * (window.innerWidth-200));
  const y = Math.floor(Math.random() * (window.innerHeight-200));
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
  return {x, y};
}

