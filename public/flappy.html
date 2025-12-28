const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let y = 200;
let vel = 0;
const grav = 0.5;

let itens = [];

function pular() {
  vel = -8;
}

canvas.addEventListener("click", pular);
canvas.addEventListener("touchstart", e => {
  e.preventDefault();
  pular();
});

function criarItem() {
  itens.push({
    x: canvas.width,
    y: Math.random() * 300 + 40
  });
}

setInterval(criarItem, 1400);

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  vel += grav;
  y += vel;

  // PERSONAGEM
  ctx.font = "28px Quicksand";
  ctx.fillText("💜", 40, y);

  itens.forEach(i => {
    i.x -= 2.5;
    ctx.fillText("✨", i.x, i.y);

    // COLISÃO
    if (i.x < 60 && i.x > 20 && Math.abs(i.y - y) < 25) {
      save.pontos += 1;
      atualizarPontos();
      i.x = -100;
    }
  });

  // LIMITE
  if (y > canvas.height || y < 0) {
    y = 200;
    vel = 0;
  }

  requestAnimationFrame(loop);
}

loop();

function voltar() {
  window.location.href = "index.html";
}
