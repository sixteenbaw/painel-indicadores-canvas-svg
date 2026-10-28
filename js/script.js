
// Dados utilizados nos gráficos
const dados = [
  { rotulo: "HTML", valor: 85, cor: "#3769bb" },
  { rotulo: "CSS", valor: 72, cor: "#429678" },
  { rotulo: "JavaScript", valor: 64, cor: "#d39535" },
  { rotulo: "SVG", valor: 55, cor: "#8a70b4" }
];

// Gráfico Canvas
const canvas = document.getElementById("graficoCanvas");
const ctx = canvas.getContext("2d");

const baseY = 300;
const escala = 2.4;
const largura = 90;
const espaco = 50;

let barraSelecionada = -1;

function desenharGrafico() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "13px Arial";
  ctx.textAlign = "right";

  // Linhas e valores do eixo vertical
  for (let valor = 0; valor <= 100; valor += 25) {
    const y = baseY - valor * escala;

    ctx.beginPath();
    ctx.strokeStyle = "#e0e5eb";
    ctx.lineWidth = 1;
    ctx.moveTo(60, y);
    ctx.lineTo(650, y);
    ctx.stroke();

    ctx.fillStyle = "#6e7887";
    ctx.fillText(valor, 48, y + 4);
  }

  // Barras, valores e rótulos
  dados.forEach((item, i) => {
    const x = 90 + i * (largura + espaco);
    const altura = item.valor * escala;
    const y = baseY - altura;

    ctx.fillStyle = item.cor;
    ctx.fillRect(x, y, largura, altura);

    if (barraSelecionada === i) {
      ctx.strokeStyle = "#253044";
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, largura, altura);
    }

    ctx.textAlign = "center";

    ctx.fillStyle = "#253044";
    ctx.font = "bold 16px Arial";
    ctx.fillText(item.valor, x + largura / 2, y - 12);

    ctx.fillStyle = "#4b586b";
    ctx.font = "15px Arial";
    ctx.fillText(item.rotulo, x + largura / 2, baseY + 30);
  });
}

desenharGrafico();

// Clique nas barras do Canvas
canvas.addEventListener("click", (evento) => {
  const rect = canvas.getBoundingClientRect();

  const x = (evento.clientX - rect.left) *
            (canvas.width / rect.width);

  const y = (evento.clientY - rect.top) *
            (canvas.height / rect.height);

  dados.forEach((item, i) => {
    const barraX = 90 + i * (largura + espaco);
    const altura = item.valor * escala;
    const barraY = baseY - altura;

    if (
      x >= barraX &&
      x <= barraX + largura &&
      y >= barraY &&
      y <= baseY
    ) {
      barraSelecionada = i;

      document.getElementById("selecaoCanvas").textContent =
        `${item.rotulo}: ${item.valor} pontos`;

      desenharGrafico();
    }
  });
});

// Interação com o gráfico SVG
const barrasSvg = document.querySelectorAll(".barra-svg");

function selecionarBarra(barra) {
  barrasSvg.forEach((item) => {
    item.classList.remove("ativo");
  });

  barra.classList.add("ativo");

  const rotulo = barra.dataset.rotulo;
  const valor = barra.dataset.valor;

  document.getElementById("selecaoSvg").textContent =
    `${rotulo}: ${valor} pontos`;
}

barrasSvg.forEach((barra) => {
  barra.addEventListener("click", () => {
    selecionarBarra(barra);
  });

  barra.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      selecionarBarra(barra);
    }
  });
});
