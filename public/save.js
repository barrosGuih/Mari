let save = {
  pontos: Number(localStorage.getItem("pontos")) || 0
};

function atualizarPontos() {
  localStorage.setItem("pontos", save.pontos);
  const el = document.getElementById("pontos");
  if (el) el.innerText = save.pontos;
}

atualizarPontos();
