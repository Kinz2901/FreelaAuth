import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: " CHAVE DA API ",
  authDomain: "freelaalth.firebaseapp.com",
  projectId: "freelaalth",
  storageBucket: "freelaalth.firebasestorage.app",
  messagingSenderId: "1068388332809",
  appId: "1:1068388332809:web:ade49c3b1c614f9f75cfd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId, color) {
  let messageDiv = document.getElementById(divId);
  if (messageDiv) { // Verifica se o elemento existe
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    messageDiv.style.background = color
    setTimeout(function () {
      messageDiv.style.opacity = 0;
    }, 5000);
  } else {
    console.error(`Elemento com ID '${divId}' não encontrado.`);
  }
}

const singUp = document.querySelector("#submitSignUp");
singUp.addEventListener("click", (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#fName").value;
  const lastName = document.querySelector("#lName").value;
  const email = document.querySelector("#rEmail").value;
  const password = document.querySelector("#rPassword").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;
  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        firstName,
        lastName,
        email,
      };
      showMessage("Account Created Successfully", "signUpMessage", "green");
      return setDoc(doc(db, "users", user.uid), userData);
    })
    .then(() => {
      setTimeout(() => {
        window.location.href = "index.html";
      }, 5000);
    })
    .catch((error) => {
      console.error("Error during user creation:", error);
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        showMessage("Email Address Already Exists !!!", "signUpMessage", "red");
      } else {
        showMessage(`Unable to create User: ${error.message}`, "signUpMessage", "red");
      }
    });
});

