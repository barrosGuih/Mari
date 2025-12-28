let save = JSON.parse(localStorage.getItem("save")) || {
  nome: "",
  pontos: 0
};

function salvar() {
  localStorage.setItem("save", JSON.stringify(save));
}

function salvarNome() {
  const nome = document.getElementById("nomeInput").value;
  if (!nome) return alert("Digite seu nome 💕");

  save.nome = nome;
  salvar();
  atualizarUI();
  mostrar("game");
}

function ganharPontos(qtd) {
  save.pontos += qtd;
  salvar();
  atualizarUI();
}

function atualizarUI() {
  document.getElementById("pontos").innerText = save.pontos;
  document.getElementById("nomeMenu").innerText = save.nome;
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
}

function mostrar(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// INIT
if (save.nome) {
  atualizarUI();
  mostrar("game");
}
