const save = {
  pontos: Number(localStorage.getItem("pontos")) || 0
};

function atualizarPontos() {
  localStorage.setItem("pontos", save.pontos);

  const pontosEl = document.getElementById("pontos");
  if (pontosEl) {
    pontosEl.textContent = `${save.pontos} / 20 ❤️`;
  }

  verificarFinal();
}

function verificarFinal() {
  const final = document.getElementById("finalSecreto");

  if (!final) return;

  if (save.pontos >= 20) {
    final.style.display = "block";
  } else {
    final.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", verificarFinal);