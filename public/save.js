const save = {
  nome: "Mari 💜",
  pontos: Number(localStorage.getItem("pontos")) || 0
};

function salvar() {
  localStorage.setItem("pontos", save.pontos);
}

function atualizarPontos() {
  const el = document.getElementById("pontos");

  if (el) {
    el.innerText = save.pontos;
  }

  salvar();
}
