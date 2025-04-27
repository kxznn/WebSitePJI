let clientes = [];
let administradores = [];
function cadastro_usuario(){
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("cadastroForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
            const tipo = document.getElementById("tipo").value;
            const usuario = {nome, email, senha};
            if (tipo == "cliente"){
                clientes.push(usuario);
                alert("Cliente cadastrado com sucesso!");
            }
            else if (tipo == "admin"){
                administradores.push(usuario);
                alert("Administrador cadastrado com sucesso!");
            }
            console.log("Clientes:", clientes);
            console.log("Administradores:", administradores);
        });
    });
}
if (nome != "" && email != "" && senha != ""){
    cadastro_usuario(nome, email, senha); 
    document.getElementById("CadastroForm").reset();
}