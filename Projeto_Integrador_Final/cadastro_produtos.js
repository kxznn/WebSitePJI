let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function cadastro_produtos() {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("cadastroForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const codigo = document.getElementById("codigo").value;
            const quantidade = document.getElementById("quantidade").value;
            const descricao = document.getElementById("descricao").value;

            if (nome !== "" && codigo !== "" && quantidade !== "" && descricao !== "") {
                const pecas = { nome, codigo, quantidade, descricao };
                produtos.push(pecas);
                localStorage.setItem("produtos", JSON.stringify(produtos)); // SALVA NO LOCALSTORAGE
                alert("Produto cadastrado com sucesso!");
                document.getElementById("cadastroForm").reset();
            } else {
                alert("Preencha todos os campos.");
            }
        });
    });
    cadastro_produtos();
}