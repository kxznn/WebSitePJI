function cadastro_cliente() {
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");

    if (!form) {
      console.warn("Formulário de cadastro não encontrado.");
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value;

      if (nome && email && senha) {
        const cliente = { nome, email, senha };

        clientes.push(cliente);
        localStorage.setItem("clientes", JSON.stringify(clientes));
        alert("Cliente cadastrado com sucesso!");
        window.location.href = "login.html";

        console.log("Clientes:", clientes);

        form.reset();
      } else {
        alert("Preencha todos os campos.");
      }
    });
  });
}

cadastro_cliente();