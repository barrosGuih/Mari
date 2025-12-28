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
    texto: "Eu odeio o Filmes carros",
    resposta: false
  },
  {
    texto: "Amamos ver Filmes apesar de toda vez nao conseguimos assistir kkkkk",
    resposta: true
  },
  {
    texto: "A gente e brega",
    resposta: false
  },
    {
    texto: "TE AMO MAIS QUE CHACULATE",
    resposta: true
  },
{
    texto: "Vamos casar um dia e construir uma linda familia?",
    resposta: true
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
