function atualizarRecompensas() {
  const r = [
    { id:1, max:25},
    { id:2, max:100 },
    { id:3, max:200 }
  ];

  r.forEach(e => {
    const atual = Math.min(save.pontos, e.max);
    document.getElementById(`p${e.id}`).style.width =
      (atual/e.max)*100 + "%";

    document.getElementById(`t${e.id}`).innerText =
      save.pontos >= e.max
      ? "💜 Cartinha liberada!"
      : `${atual} / ${e.max} corações`;
  });
}
