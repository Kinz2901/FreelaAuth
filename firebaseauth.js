import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "colocar a chave da api que está no arquivo env",
  authDomain: "freelaalth.firebaseapp.com",
  projectId: "freelaalth",
  storageBucket: "freelaalth.firebasestorage.app",
  messagingSenderId: "1068388332809",
  appId: "1:1068388332809:web:ade49c3b1c614f9f75cfd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function showMessage(message, divId) {
  let messageDiv=document.getElementById(divId)
  messageDiv.style.display="block"
  messageDiv.innerHTML=message;
  messageDiv.style.opacity= 1;
  setTimeout(function () {
    messageDiv.style.opacity= 0;
  }, 5000)
}
const singUp = document.querySelector("#submitSignUp")
singUp.addEventListener("click", (event) => {
  event.preventDefault()
  const firstName = document.querySelector("#fName").value;
  const lastName = document.querySelector("#lName").value;
  const email = document.querySelector("#rEmail").value;
  const password = document.querySelector("#rPassword").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;
  const auth = getAuth();
  const db = getFirestore();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>{
    const user = userCredential.user;
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    showMessage("Account Created Sucessfully", "singUpMessage")
    const docRef=doc(db, "users", user.uid)
    setDoc(docRef, userData)
    .then(() => {
      window.location.href="index,html";
    })
    .catch((error) => {
      console.error("error writing document", error)
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode == "auth/email-already-in-use") {
      showMessage("Email Address Aready Exists !!!", "signUpMessage")
    } else {
      showMessage("unable to create User", "signUpMessage")
    }
  })
})