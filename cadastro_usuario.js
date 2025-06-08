function cadastro_usuario() {
  const clientes = JSON.parse(localStorage.getItem("cliente")) || [];
  const administradores = JSON.parse(localStorage.getItem("admin")) || [];
  const usuario = JSON.parse(localStorage.getItem("usuario_logado"));

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
      const tipo = document.getElementById("tipo").value;

      if (nome && email && senha) {
        const usuario = { nome, email, senha };

        if (tipo === "cliente") {
          clientes.push(usuario);
          localStorage.setItem("clientes", JSON.stringify(clientes));
          alert("Cliente cadastrado com sucesso!");
          window.location.href = "login.html";  // redireciona para login
        } else if (tipo === "admin") {
          administradores.push(usuario);
          localStorage.setItem("administradores", JSON.stringify(administradores));
          alert("Administrador cadastrado com sucesso!");
          window.location.href = "login.html";  // redireciona para login
        } else {
          alert("Tipo de usuário inválido.");
        }

        console.log("Clientes:", clientes);
        console.log("Administradores:", administradores);

        form.reset();
      } else {
        alert("Preencha todos os campos.");
      }
    });
  });
}
cadastro_usuario();
