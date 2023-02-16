var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// establecer valores predeterminados
var mouseDown = false;
var lastX = 0;
var lastY = 0;
var lineWidth = 2;
var strokeStyle = '#000000';

// agregar evento para dibujar línea cuando se hace clic y arrastra
canvas.addEventListener('mousedown', function(e) {
  mouseDown = true;
  lastX = e.clientX - canvas.offsetLeft;
  lastY = e.clientY - canvas.offsetTop;
});

canvas.addEventListener('mouseup', function(e) {
  mouseDown = false;
});

canvas.addEventListener('mousemove', function(e) {
  if (mouseDown) {
    var currentX = e.clientX - canvas.offsetLeft;
    var currentY = e.clientY - canvas.offsetTop;
    drawLine(lastX, lastY, currentX, currentY);
    lastX = currentX;
    lastY = currentY;
  }
});

// agregar evento para dibujar línea cuando se toca y arrastra en una pantalla táctil
canvas.addEventListener('touchstart', function(e) {
  mouseDown = true;
  lastX = e.touches[0].clientX - canvas.offsetLeft;
  lastY = e.touches[0].clientY - canvas.offsetTop;
});

canvas.addEventListener('touchend', function(e) {
  mouseDown = false;
});

canvas.addEventListener('touchmove', function(e) {
  if (mouseDown) {
    var currentX = e.touches[0].clientX - canvas.offsetLeft;
    var currentY = e.touches[0].clientY - canvas.offsetTop;
    drawLine(lastX, lastY, currentX, currentY);
    lastX = currentX;
    lastY = currentY;
  }
});

// agregar eventos para actualizar el grosor y el color de la línea
document.getElementById('line-width').addEventListener('change', function(e) {
  lineWidth = e.target.value;
});

document.getElementById('stroke-style').addEventListener('change', function(e) {
  strokeStyle = e.target.value;
});

// función para dibujar una línea
function drawLine(startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
}
