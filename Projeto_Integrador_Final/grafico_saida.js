// Pega os produtos do localStorage
let produtos_saida = JSON.parse(localStorage.getItem("produtos_saida")) || [];

// Mapeia para pontos do gráfico
const pontos_saida = produtos_saida.map(produto => ({
  x: produto.nome_produto,
  y: Number(produto.quantidade) || 0  // converte quantidade para número
}));

// Cria o gráfico na div com id 'chartDiv'
const chart2 = JSC.chart('chartDiv_saida', {
  type: 'vertical column',
  series: [{
    name: 'Quantidade',
    points: pontos_saida
  }]
});

// Se quiser atualizar o gráfico depois, pode criar função assim:
function updateChart(novosProdutos_saida) {
  const novosPontos_saida = novosProdutos_saida.map(p => ({
    x: p.nome_produto,
    y: Number(p.quantidade) || 0
  }));
  chart2.series(0).setPoints(novosPontos_saida);
}