const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// IMAGEM DO PASSARINHO
const birdImg = new Image();
birdImg.src = "bird.png";

// ESTADO
let y = canvas.height / 2;
let vel = 0;
const gravidade = 0.5;

// ITENS
let estrelas = [];
let ultimoSpawn = 0;

// CONTROLES
function pular() {
  vel = -8;
}

canvas.addEventListener("click", pular);
canvas.addEventListener("touchstart", e => {
  e.preventDefault();
  pular();
});

// CRIAR ESTRELA
function criarEstrela(t) {
  if (t - ultimoSpawn > 1300) {
    estrelas.push({
      x: canvas.width + 30,
      y: Math.random() * (canvas.height - 80) + 40
    });
    ultimoSpawn = t;
  }
}

// LOOP
function loop(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  criarEstrela(t);

  // FÍSICA
  vel += gravidade;
  y += vel;

  // LIMITES
  if (y < 0) y = 0;
  if (y > canvas.height - 40) {
    y = canvas.height / 2;
    vel = 0;
  }

  // DESENHA PASSARINHO (imagem)
  ctx.drawImage(birdImg, 30, y, 40, 40);

  // ESTRELAS
  for (let i = estrelas.length - 1; i >= 0; i--) {
    const e = estrelas[i];
    e.x -= 2.2;

    ctx.font = "24px serif";
    ctx.fillText("💜", e.x, e.y);

    // COLISÃO
    if (
      e.x < 70 &&
      e.x > 10 &&
      Math.abs(e.y - y) < 30
    ) {
      save.pontos += 1;
      atualizarPontos();
      estrelas.splice(i, 1);
      continue;
    }

    if (e.x < -40) estrelas.splice(i, 1);
  }

  requestAnimationFrame(loop);
}

birdImg.onload = () => {
  requestAnimationFrame(loop);
};
