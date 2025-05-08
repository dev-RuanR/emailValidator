const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener('submit', function(event){
    event.preventDefault();


    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    const emailRegex = /^[a-zA-Z0-0._]+@gmail\.com$/i;

    if(!email || !senha){
        alert('Digite todos os dados');
        return
    }

    if(!emailRegex.test(email)){
        errorMsg.textContent = 'Digite um e-mail valido com o dominio correto: ex - teste@gmail.com';
        return
    }
    errorMsg.textContent = '';
    alert('Login realizado com sucesso!!');
})