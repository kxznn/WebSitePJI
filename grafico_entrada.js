// Pega os produtos do localStorage
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Mapeia para pontos do gráfico
const pontos = produtos.map(produto => ({
  x: produto.nome,
  y: Number(produto.quantidade) || 0  // converte quantidade para número
}));

// Cria o gráfico na div com id 'chartDiv'
const chart = JSC.chart('chartDiv', {
  type: 'vertical column',
  series: [{
    name: 'Quantidade',
    points: pontos
  }]
});

// Se quiser atualizar o gráfico depois, pode criar função assim:
function updateChart(novosProdutos) {
  const novosPontos = novosProdutos.map(p => ({
    x: p.nome,
    y: Number(p.quantidade) || 0
  }));
  chart.series(0).setPoints(novosPontos);
}