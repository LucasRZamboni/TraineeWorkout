const showPasswordCadastro = document.getElementById("passViewCadastro");
const passwordCadastro = document.getElementById("passwordCadastro");
const iconeCadastro = document.getElementById('iconeCadastro');


showPasswordCadastro.addEventListener('click', function(){
    if(passwordCadastro.type === 'password'){
        passwordCadastro.type = 'text';
        iconeCadastro.name = 'eye-off-outline';
    }
    else{
        passwordCadastro.type = 'password';
        iconeCadastro.name = 'eye-outline';
    }
})

const showPasswordLogin = document.getElementById("passViewLogin");
const passwordLogin = document.getElementById("passwordLogin");
const iconeLogin = document.getElementById('iconeLogin');

showPasswordLogin.addEventListener('click', function(){
    if(passwordLogin.type === 'password'){
        passwordLogin.type = 'text';
        iconeLogin.name = 'eye-off-outline';
    }
    else{
        passwordLogin.type = 'password';
        iconeLogin.name = 'eye-outline';
    }
})