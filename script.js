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

const passwordLogin = document.querySelector("#passwordLogin")
const lockPasswordLogin = document.querySelector("#lockPasswordLogin")
const unlockPasswordLogin = document.querySelector("#unlockPasswordLogin")

// Mostrar password e password confirm
lockPassword.addEventListener("click",()  => {
  lockPassword.style.display = "none";
  unlockPassword.style.display = "flex"
  rPassword.type = "string"
})
lockConfirmPassword.addEventListener("click",()  => {
  lockConfirmPassword.style.display = "none";
  unlocKConfirmPassword.style.display = "flex"
  confirmPassword.type = "string"
})
lockPasswordLogin.addEventListener("click",()  => {
  lockPasswordLogin.style.display = "none";
  unlockPasswordLogin.style.display = "flex"
  passwordLogin.type = "string"
})

// Ocultar password e password confirm
unlockPassword.addEventListener("click",() => {
  unlockPassword.style.display = "none";
  lockPassword.style.display = "flex"
  rPassword.type = "password"
})
unlocKConfirmPassword.addEventListener("click",() => {
  unlocKConfirmPassword.style.display = "none";
  lockConfirmPassword.style.display = "flex"
  confirmPassword.type = "password"
})
unlockPasswordLogin.addEventListener("click",() => {
  unlockPasswordLogin.style.display = "none";
  lockPasswordLogin.style.display = "flex"
  passwordLogin.type = "password"
})

// Adiciona um ouvinte de eventos ao botão de cadastro
signUpButton.addEventListener('click', () => {
    // Oculta o formulário de login
    signInForm.style.display = "none";
    // Exibe o formulário de cadastro
    signUpForm.style.display = "block";
});

// Adiciona um ouvinte de eventos ao botão de login
signInButton.addEventListener('click', () => {
    // Exibe o formulário de login
    signInForm.style.display = "block";
    // Oculta o formulário de cadastro
    signUpForm.style.display = "none";
});
