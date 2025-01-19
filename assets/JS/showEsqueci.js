const showEsqueci = document.getElementById('showEsqueci');

showEsqueci.addEventListener('click', function (event) {
    event.preventDefault();

    if (window.matchMedia("(max-width: 1024px)").matches) {
        if (formEsqueci.style.display === "" || formEsqueci.style.display === "none") {
            formEsqueci.style.display = "flex";
            formEsqueci.style.border = 'none';
            formLogin.style.display = "none";
            entrar.style.display = 'none';
            formCadastro.style.display = "none";
        } else {
            formEsqueci.style.display = "none";
            formLogin.style.display = "flex";
            entrar.style.display = 'none';
            formCadastro.style.display = "none";
        }
    }
    else{
        if (formEsqueci.style.display === "" || formEsqueci.style.display === "none") {
            formEsqueci.style.display = "flex";
            formLogin.style.display = "none";
            entrar.style.display = 'flex';
            formCadastro.style.display = "none";
            entrar.style.width = '368px';
        } else {
            formEsqueci.style.display = "none";
            formLogin.style.display = "flex";
            entrar.style.display = 'none';
            formCadastro.style.display = "none";
        }
    }
});
