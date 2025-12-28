const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let y = canvas.height / 2;
let vel = 0;
const gravidade = 0.5;
let itens = [];

function pular() {
  vel = -8;
}

canvas.onclick = pular;
canvas.addEventListener("touchstart", e => {
  e.preventDefault();
  pular();
});

function criarItem() {
  itens.push({
    x: canvas.width,
    y: Math.random() * (canvas.height - 40) + 20
  });
}

setInterval(criarItem, 1500);

function loop() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  vel += gravidade;
  y += vel;

  ctx.font = "28px serif";
  ctx.fillText("💜", 40, y);

  itens.forEach(i => {
    i.x -= 2.5;
    ctx.fillText("✨", i.x, i.y);

    if (i.x < 60 && i.x > 20 && Math.abs(i.y - y) < 25) {
      save.pontos++;
      atualizarPontos();
      i.x = -100;
    }
  });

  if (y > canvas.height || y < 0) {
    y = canvas.height / 2;
    vel = 0;
  }

  requestAnimationFrame(loop);
}

loop();
