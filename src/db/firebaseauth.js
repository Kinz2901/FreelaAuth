// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Your web app's Firebase configuration
//CHAVE API------------------------------------------

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Function to show messages to the user
function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// Function to validate email and password
function validateEmailPassword(email, password) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "signUpMessage");
    return false;
  }
  if (password.length < 6) {
    showMessage(
      "Password must be at least 6 characters long.",
      "signUpMessage"
    );
    return false;
  }
  return true;
}

// Sign-up functionality
const signUp = document.getElementById("submitSignUp");
signUp.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;
  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;

  // Validate email and password
  if (!validateEmailPassword(email, password)) return;

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
      };
      showMessage("Account Created Successfully", "signUpMessage");
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "index.html"; // Redirect to the login page
        })
        .catch((error) => {
          console.error("Error writing document", error);
          showMessage(
            "Failed to save user data. Please try again.",
            "signUpMessage"
          );
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        showMessage("Email Address Already Exists !!!", "signUpMessage");
      } else {
        showMessage(
          "Unable to create User. Please try again.",
          "signUpMessage"
        );
      }
    });
});

// Sign-in functionality
const signIn = document.getElementById("submitSignIn");
signIn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate email and password
  if (!validateEmailPassword(email, password)) return;

  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("Login is successful", "signInMessage");
      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "homepage.html"; // Redirect to the homepage
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        showMessage("Incorrect Email or Password", "signInMessage");
      } else {
        showMessage("Account does not Exist", "signInMessage");
      }
    });
});

// Selecionar o ícone e o campo de senha
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

// Adicionar evento de clique para alternar a visibilidade da senha
togglePassword.addEventListener("click", function () {
  // Verificar o tipo do input de senha
  const type = passwordField.type === "password" ? "text" : "password";

  // Alterar o tipo do input
  passwordField.type = type;

  // Alternar o ícone (opcional, para indicar se a senha está visível ou não)
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-lock");
});
