document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista");
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    if (produtos.length === 0) {
        lista.innerHTML = "<p>Nenhum produto cadastrado.</p>";
        return;
    }

    produtos.forEach(produto => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <strong>Nome:</strong> ${produto.nome}<br>
            <strong>Código:</strong> ${produto.codigo}<br>
            <strong>Quantidade:</strong> ${produto.quantidade}<br>
            <strong>Descrição:</strong> ${produto.descricao}<br><br>
        `;
        lista.appendChild(item);
    });
});
