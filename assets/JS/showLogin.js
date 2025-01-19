const showLogin = document.querySelectorAll(".showLogin");
const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");
const formEsqueci = document.getElementById("formEsqueci");
const entrar = document.getElementById("entrar");

showLogin.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    if (window.matchMedia("(max-width: 1024px)").matches) {
      if (
        formLogin.style.display === "" ||
        formLogin.style.display === "none"
      ) {
        formLogin.style.display = "flex";
        entrar.style.display = "none";
        formCadastro.style.display = "none";
        formEsqueci.style.display = "none";
        formLogin.style.border = 'none';
      } else {
        formLogin.style.display = "none";
        entrar.style.display = "flex";
        formCadastro.style.display = "none";
        formEsqueci.style.display = "none";
      }
    } else {
      if (
        formLogin.style.display === "" ||
        formLogin.style.display === "none"
      ) {
        formLogin.style.display = "flex";
        entrar.style.display = "flex";
        entrar.style.width = "368px";
        formCadastro.style.display = "none";
        formEsqueci.style.display = "none";
      } else {
        formLogin.style.display = "flex";
        entrar.style.display = "flex";
        formCadastro.style.display = "none";
        formEsqueci.style.display = "none";
      }
    }
  });
});
