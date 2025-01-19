const mensagemAlerta = document.getElementById("mensagemAlerta");
const botaoLogin = document.getElementById("botaoLogin");
const emailLogin = document.getElementById("emailLogin");

function exibirMensagem(mensagem, tipo) {

  mensagemAlerta.className = "alerta";
  mensagemAlerta.classList.add(tipo);


  mensagemAlerta.innerHTML = `
    <span>${mensagem}</span>
    <button class="btn btn-close" id="close"></button>
  `;
  
  mensagemAlerta.style.display = "flex";

  document.getElementById("close").addEventListener("click", function () {
    mensagemAlerta.style.display = "none";
  });
}

botaoLogin.addEventListener("click", function (event) {
  event.preventDefault();

  if (emailLogin.value.trim() === "" || passwordLogin.value.trim() === "") {
    exibirMensagem("Email ou senha inválidos", "erro");
  } else {
    exibirMensagem("Login efetuado com sucesso", "sucesso");
  }
});
