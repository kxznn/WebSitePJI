const usuario = JSON.parse(localStorage.getItem("usuario_logado"));

    if (!usuario) {
      alert("Você precisa estar logado.");
      window.location.href = "cadastro_usuario.html";
    } else {
      const userInfo = document.querySelector(".user-info span");
      if (userInfo) {
        userInfo.textContent = `Olá, ${usuario.nome} (${usuario.tipo})`;
      }

      if (usuario.tipo !== "admin") {
        document.querySelectorAll(".admin-only").forEach(el => {
          el.style.display = "none";
        });
      }
        
      const btnSair = document.getElementById("btnSair");
      if (btnSair) {
        btnSair.addEventListener("click", () => {
          localStorage.removeItem("usuario_logado");
          window.location.href = "login.html";
        });
      }
    }