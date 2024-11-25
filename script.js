// Seleciona o botão de cadastro (Sign Up)
const signUpButton = document.getElementById('signUpButton');

// Seleciona o botão de login (Sign In)
const signInButton = document.getElementById('signInButton');

// Seleciona o formulário de login
const signInForm = document.getElementById('signIn');

// Seleciona o formulário de cadastro
const signUpForm = document.getElementById('signup');

// Adiciona um ouvinte de eventos ao botão de cadastro
signUpButton.addEventListener('click', function () {
    // Oculta o formulário de login
    signInForm.style.display = "none";
    // Exibe o formulário de cadastro
    signUpForm.style.display = "block";
});

// Adiciona um ouvinte de eventos ao botão de login
signInButton.addEventListener('click', function () {
    // Exibe o formulário de login
    signInForm.style.display = "block";
    // Oculta o formulário de cadastro
    signUpForm.style.display = "none";
});
