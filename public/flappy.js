const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// ESTADO DO JOGO
let y = canvas.height / 2;
let velocidade = 0;
const gravidade = 0.5;

// ITENS (PONTOS)
let itens = [];

// PULAR
function pular() {
  velocidade = -8;
}

// CONTROLES (PC + CELULAR)
canvas.addEventListener("click", pular);
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  pular();
});

// CRIAR ITENS
function criarItem() {
  itens.push({
    x: canvas.width,
    y: Math.random() * (canvas.height - 60) + 30
  });
}

setInterval(criarItem, 1400);

// LOOP PRINCIPAL
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // FÍSICA
  velocidade += gravidade;
  y += velocidade;

  // PERSONAGEM (CORAÇÃO)
  ctx.font = "28px Quicksand";
  ctx.fillText("💜", 40, y);

  // ITENS
  itens.forEach(item => {
    item.x -= 2.5;
    ctx.fillText("✨", item.x, item.y);

    // COLISÃO = PONTO
    if (
      item.x < 60 &&
      item.x > 20 &&
      Math.abs(item.y - y) < 25
    ) {
      save.pontos += 1;
      atualizarPontos();
      item.x = -100;
    }
  });

  // LIMITES
  if (y > canvas.height || y < 0) {
    y = canvas.height / 2;
    velocidade = 0;
  }

  requestAnimationFrame(loop);
}

loop();
