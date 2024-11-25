// Seleciona o botão de cadastro (Sign Up)
const signUpButton = document.getElementById('signUpButton');

// Seleciona o botão de login (Sign In)
const signInButton = document.getElementById('signInButton');

// Seleciona o formulário de login
const signInForm = document.getElementById('signIn');

// Seleciona o formulário de cadastro
const signUpForm = document.getElementById('signup');

const rPassword = document.querySelector("#rPassword")
const lockPassword = document.querySelector("#lockPassword")
const unlockPassword = document.querySelector("#unlockPassword")

const confirmPassword = document.querySelector("#confirmPassword")
const lockConfirmPassword = document.querySelector("#lockConfirmPassword")
const unlocKConfirmPassword = document.querySelector("#unlockConfirmPassword")

// Mostrar password e password confirm
lockPassword.addEventListener("click", function() {
  lockPassword.style.display = "none";
  unlockPassword.style.display = "flex"
  rPassword.type = "string"
})
lockConfirmPassword.addEventListener("click", function() {
  lockConfirmPassword.style.display = "none";
  unlocKConfirmPassword.style.display = "flex"
  confirmPassword.type = "string"
})

// Ocultar password e password confirm
unlockPassword.addEventListener("click", function() {
  unlockPassword.style.display = "none";
  lockPassword.style.display = "flex"
  rPassword.type = "password"
})
unlocKConfirmPassword.addEventListener("click", function() {
  unlocKConfirmPassword.style.display = "none";
  lockConfirmPassword.style.display = "flex"
  confirmPassword.type = "password"
})

// Adiciona um ouvinte de eventos ao botão de cadastro
// signUpButton.addEventListener('click', function () {
//     // Oculta o formulário de login
//     signInForm.style.display = "none";
//     // Exibe o formulário de cadastro
//     signUpForm.style.display = "block";
// });

// Adiciona um ouvinte de eventos ao botão de login
signInButton.addEventListener('click', function () {
    // Exibe o formulário de login
    signInForm.style.display = "block";
    // Oculta o formulário de cadastro
    signUpForm.style.display = "none";
});
