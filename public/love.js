document.addEventListener("DOMContentLoaded", () => {

  const loveScreen = document.getElementById("loveScreen");
  const menu = document.getElementById("menu");
  const btnSim = document.getElementById("btnSim");
  const btnNao = document.getElementById("btnNao");
  const music = document.getElementById("music");

  const nomeLove = document.getElementById("nome");
  const nomeMenu = document.getElementById("nomeMenu");

  let precisaInteracao = false;

  // ---- CONTROLE DE TELA ----
  if (localStorage.getItem("ama") === "true") {
    loveScreen.style.display = "none";
    menu.style.display = "block";
    precisaInteracao = true;
  }

  // ---- BOTÃO SIM ----
  btnSim.addEventListener("click", () => {
    localStorage.setItem("ama", "true");
    localStorage.setItem("tocarMusica", "true");

    music.play().catch(() => {});
    loveScreen.style.display = "none";
    menu.style.display = "block";
  });

  // ---- BOTÃO NÃO FOGE (PC + MOBILE) ----
  function fugir() {
    const x = Math.random() * (window.innerWidth - 140);
    const y = Math.random() * (window.innerHeight - 70);

    btnNao.style.position = "absolute";
    btnNao.style.left = x + "px";
    btnNao.style.top = y + "px";
  }

  btnNao.addEventListener("mouseover", fugir);
  btnNao.addEventListener("touchstart", e => {
    e.preventDefault();
    fugir();
  });

  // ---- TOCAR MÚSICA APÓS PRIMEIRA INTERAÇÃO ----
  document.addEventListener("click", () => {
    if (
      precisaInteracao &&
      localStorage.getItem("tocarMusica") === "true" &&
      music.paused
    ) {
      music.play().catch(() => {});
      precisaInteracao = false;
    }
  }, { once: true });

  // ---- PAUSE / PLAY AO CLICAR NO NOME ----
  function toggleMusic() {
    if (music.paused) {
      music.play().catch(() => {});
    } else {
      music.pause();
    }
  }

  if (nomeLove) nomeLove.addEventListener("click", toggleMusic);
  if (nomeMenu) nomeMenu.addEventListener("click", toggleMusic);

});
