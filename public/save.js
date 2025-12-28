const save = {
  nome: "Mari 💜",
  pontos: Number(localStorage.getItem("pontos")) || 0
};

function salvar() {
  localStorage.setItem("pontos", save.pontos);
}

function atualizarPontos() {
  document.getElementById("pontos").innerText = save.pontos;
  salvar();
}
