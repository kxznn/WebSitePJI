document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const fileInput = document.getElementById("arquivo_produto_csv");

  // Função para salvar novos produtos no localStorage acumulando
  function salvarProdutosNovos(novosProdutos) {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos = produtos.concat(novosProdutos);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }

  // Cadastro manual via formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = {
      nome: document.getElementById("nome").value.trim(),
      codigo: document.getElementById("codigo").value.trim(),
      quantidade: document.getElementById("quantidade").value.trim(),
      descricao: document.getElementById("descricao").value.trim(),
    };

    // Validação simples
    if (!produto.nome || !produto.codigo) {
      alert("Por favor, preencha os campos obrigatórios: Nome e Código.");
      return;
    }

    salvarProdutosNovos([produto]);

    alert(`Produto "${produto.nome}" cadastrado com sucesso!`);
    form.reset();
  });

  // Importação via CSV
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        // Mapear e filtrar produtos válidos
        const produtosNovos = results.data
          .map((produto) => ({
            nome: produto.nome?.trim() || "",
            codigo: produto.codigo?.trim() || "",
            quantidade: produto.quantidade?.trim() || "",
            descricao: produto.descricao?.trim() || "",
          }))
          .filter((p) => p.nome && p.codigo);

        if (produtosNovos.length === 0) {
          alert("Nenhum produto válido encontrado no CSV.");
          return;
        }

        salvarProdutosNovos(produtosNovos);

        alert(`${produtosNovos.length} produto(s) importado(s) do CSV com sucesso!`);
        fileInput.value = ""; // limpa o input para possível novo upload
      },
      error: (error) => {
        alert("Erro ao ler o arquivo CSV: " + error.message);
      },
    });
  });
});
