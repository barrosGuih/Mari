const perguntas = [
  { texto: "Ele pensa em mim todo dia?", correta: true },
  { texto: "Ele ama meu sorriso?", correta: true },
  { texto: "Ele já pensou em um futuro comigo?", correta: true }
];

let atual = 0;

function mostrar() {
  document.getElementById("pergunta").innerText =
    perguntas[atual].texto;
}

function responder(resp) {
  if (resp === perguntas[atual].correta) {
    save.pontos += 2;
    atualizarPontos();
  }

  atual++;
  if (atual >= perguntas.length) {
    atual = 0;
  }
  mostrar();
}

mostrar();
