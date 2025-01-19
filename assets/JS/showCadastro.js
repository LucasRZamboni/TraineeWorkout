const showCadastro = document.getElementById("showCadastro");

showCadastro.addEventListener("click", function (event) {
  event.preventDefault();

  if (window.matchMedia("(max-width: 1024px)").matches) {
    if (
      formCadastro.style.display === "" ||
      formCadastro.style.display === "none"
    ) {
      formEsqueci.style.display = "none";
      formEsqueci.style.border = "none";
      formLogin.style.display = "none";
      entrar.style.display = "none";
      formCadastro.style.display = "flex";
    } else {
      formEsqueci.style.display = "none";
      formLogin.style.display = "flex";
      entrar.style.display = "none";
      formCadastro.style.display = "none";
    }
  } else {
    if (
      formCadastro.style.display === "" ||
      formCadastro.style.display === "none"
    ) {
      formEsqueci.style.display = "none";
      formLogin.style.display = "none";
      entrar.style.display = "flex";
      formCadastro.style.display = "flex";
      entrar.style.width = "368px";
    } else {
      formEsqueci.style.display = "none";
      formLogin.style.display = "flex";
      entrar.style.display = "none";
      formCadastro.style.display = "none";
    }
  }
});
