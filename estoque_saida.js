(() => {
  let produtos_saida = JSON.parse(localStorage.getItem("produtos_saida")) || [];

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");
    const listaSaida = document.getElementById("listaSaida");

    function carregarProdutosSaida() {
      if (!listaSaida) return;

      listaSaida.innerHTML = "";
      if (produtos_saida.length === 0) {
        listaSaida.innerHTML = "<p>Nenhum produto de saída cadastrado.</p>";
        return;
      }

      produtos_saida.forEach(produto => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
          <strong>Nome:</strong> ${produto.nome}<br>
          <strong>Produto:</strong> ${produto.nome_produto}<br>
          <strong>Código:</strong> ${produto.codigo}<br>
          <strong>Quantidade:</strong> ${produto.quantidade}<br>
          <strong>Descrição:</strong> ${produto.descricao}<br>
          <strong>CEP:</strong> ${produto.cep}<br>
          <strong>Bairro:</strong> ${produto.bairro}<br>
          <strong>Complemento:</strong> ${produto.complemento}<br>
          <strong>Cidade:</strong> ${produto.cidade}<br>
          <strong>Estado:</strong> ${produto.estado}<br><br>
        `;
        listaSaida.appendChild(item);
      });
    }

    carregarProdutosSaida();

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const nome_produto = document.getElementById("nome_produto").value.trim();
      const codigo = Number(document.getElementById("codigo").value.trim());
      const quantidade = Number(document.getElementById("quantidade").value.trim());
      const descricao = document.getElementById("descricao").value.trim();
      const cep = document.getElementById("cep").value.trim();
      const bairro = document.getElementById("bairro").value.trim();
      const complemento = document.getElementById("complemento").value.trim();
      const cidade = document.getElementById("cidade").value.trim();
      const estado = document.getElementById("estado").value.trim();

      if (nome && codigo && quantidade && descricao && cep && bairro && complemento && cidade && estado) {
        const pecas = { nome, nome_produto, codigo, quantidade, descricao, cep, bairro, complemento, cidade, estado };

        const atualizado = atualizarEstoque(pecas);
        if (atualizado) {
          produtos_saida.push(pecas);
          localStorage.setItem("produtos_saida", JSON.stringify(produtos_saida));
          alert("Produto cadastrado com sucesso!");
          form.reset();
          carregarProdutosSaida();
        }
      } else {
        alert("Preencha todos os campos obrigatórios.");
      }
    });

    function atualizarEstoque(produtoSaida) {
      let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
      const index = produtos.findIndex(p => Number(p.codigo) === Number(produtoSaida.codigo));
      if (index !== -1) {
        let produto = produtos[index];
        produto.quantidade -= Number(produtoSaida.quantidade);
        if (produto.quantidade <= 0) {
          produtos.splice(index, 1);
        }
        localStorage.setItem("produtos", JSON.stringify(produtos));
        return true;
      } else {
        console.warn('Produto com código não encontrado!');
        alert('Código do produto não encontrado!');
        return false;
      }
    }
  });
})();
