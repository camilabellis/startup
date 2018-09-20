var canvas = document.getElementById('c'),
    ctx = canvas.getContext('2d'),
    x = 0,
    last = performance.now();

function draw(timestamp) {
  requestAnimationFrame(draw);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(x, 100, 100, 100);
  ctx.fillStyle = "pink";
  ctx.fill();
  
  x += (timestamp - last) / 10;
  last = timestamp;
}
window.onload = requestAnimationFrame(draw);