let produtos = [];
function cadastro_produtos()
{
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("cadastroForm").addEventListener("submit", function(event){
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            const codigo = document.getElementById("codigo").value;
            const quantidade = document.getElementById("quantidade").value;
            const descricao = document.getElementById("descricao").value;
            const pecas = {nome, codigo, quantidade, descricao};
            produtos.push(pecas);
            console.log("Produtos Cadastrados:", produtos);
            window.alert("Produto cadastrado com sucesso!");
        });
    });
}
function exibicao_produtos()
{
    exibicao_produtos;
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    for(let i = 0; i; i < produtos.length, i++)
    {
        const item = document.createElement("div");
        item.className = "Lista de Produtos";
        lista.appendChild(item);
    }
}
if (nome != "" && codigo != "" && quantidade != "" && descricao != "")
{
        cadastro_produtos(nome, codigo, quantidade, descricao);
        exibicao_produtos;
        document.getElementById("CadastroForm").reset();
}