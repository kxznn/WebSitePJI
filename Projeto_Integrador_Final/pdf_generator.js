document.addEventListener("DOMContentLoaded", () => {
    const {jsPDF} = window.jspdf;
    function gerarPDF() {
        const elemento = document.getElementById("#listaCsv") || document.getElementById("lista") || document.getElementById("listaSaida");
        
        if (!elemento) {
            alert("Elemento para gerar PDF não encontrado.");
            return;
        }

        const doc = new jsPDF("p", "mm", "a4");

        doc.html(elemento, {
            callback: function (doc) {
                doc.save("lista-produtos.pdf");
            },
            x: 10,
            y: 10,
            html2canvas: {
                scale: 0.3
            }
        });
        doc.output()
    }

    const botao = document.createElement("button");
    botao.innerText = "Gerar PDF";
    botao.style.margin = "20px";
    botao.addEventListener("click", gerarPDF);
    const container = document.getElementById("listaSaida") || document.getElementById("lista") || document.body;
    container.appendChild(botao);
});
