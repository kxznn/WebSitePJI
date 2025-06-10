let produtos_saida = JSON.parse(localStorage.getItem("produtos_saida")) || [];

function cadastro_produtos_saida() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("#cadastroForm");

    if (!form) {
      console.warn("Elemento #cadastroForm não encontrado.");
      return;
    }

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

      if (
        nome && nome_produto && descricao &&
        Number.isFinite(codigo) &&
        Number.isFinite(quantidade) &&
        quantidade > 0
      ) {
        const pecas2 = {
          nome,
          nome_produto,
          codigo,
          quantidade,
          descricao,
          cep,
          bairro,
          complemento,
          cidade,
          estado
        };

        produtos_saida.push(pecas2);
        localStorage.setItem("produtos_saida", JSON.stringify(produtos_saida));
        alert("Produto cadastrado com sucesso!");
        form.reset();
      } else {
          alert("Preencha todos os campos obrigatórios corretamente.");
      }
    });
  });
}
cadastro_produtos_saida();