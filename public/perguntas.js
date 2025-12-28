const perguntas = [
  {
    texto: "A gente se conheceu pela internet",
    resposta: true
  },
  {
    texto: "Eu me apaixonei primeiro",
    resposta: true
  },
  {
    texto: "Nosso primeiro encontro foi perfeito",
    resposta: true
  },
  {
    texto: "Eu te amo mais do que chocolate",
    resposta: true
  },
  {
    texto: "A gente nunca brigou",
    resposta: false
  }
];

let indice = 0;

const perguntaEl = document.getElementById("pergunta");
const feedbackEl = document.getElementById("feedback");

function mostrarPergunta() {
  if (indice >= perguntas.length) {
    perguntaEl.textContent = "💜 Você terminou o quiz!";
    feedbackEl.textContent = "Pode voltar pro menu 😌";
    return;
  }

  perguntaEl.textContent = perguntas[indice].texto;
  feedbackEl.textContent = "";
}

function responder(valor) {
  const correta = perguntas[indice].resposta;

  if (valor === correta) {
    feedbackEl.textContent = "💜 Acertou! +1 coração";
    save.pontos += 1;
    atualizarPontos();
  } else {
    feedbackEl.textContent = "😅 Errado… mas continuo te amando";
  }

  indice++;

  setTimeout(mostrarPergunta, 1200);
}

function voltar() {
  window.location.href = "index.html";
}

mostrarPergunta();
