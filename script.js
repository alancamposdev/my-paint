//Initial Data
let currentColor = "black";
let screen = document.querySelector("#tela");
let ctx = screen.getContext("2d");
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

//Events
document.querySelectorAll(".colorBox .color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});

//Desenhar no canvas
screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);

document.querySelector(".clear").addEventListener("click", clearScreen);
//Functions
function colorClickEvent(e) {
  let color = e.target.getAttribute("data-color");
  currentColor = color;

  document.querySelector(".color.active").classList.remove("active");
  e.target.classList.add("active");
}
//Clicou ative o modo desenho
function mouseDownEvent() {
  // console.log('clicou no mouse')
  canDraw = true;
}
//Quando o mouse se mover e modo desenho estiver ativado, desenhe
function mouseMoveEvent(e) {
  //console.log('moveu o mouse')
  if (canDraw) {
    //console.log('Desenhando');
    //console.log(e.pageX , e.pageY);
    //let pointX = e.pageX - screen.offsetLeft;
    //let pointY = e.pageY - screen.offsetTop;
    //console.log( pointX , pointY)
    draw(e.pageX, e.pageY);
  }
}
//Qd o click do mouse soltar, desative o modo desenho.
function mouseUpEvent() {
  //console.log('soltou no mouse')
  canDraw = false;
}
function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  //desenhar
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.lineJoin = "round";
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = currentColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;
}
//apagar
function clearScreen() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
