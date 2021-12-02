
import {getFirebaseConfig} from './firebase-config.js';


import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';


const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();


const email = document.getElementById("usuario");
const contra = document.getElementById("contraseña");
const ingresarBoton = document.getElementById("ingresarBtn");

function login(e, ev){
    signInWithEmailAndPassword(auth, email.value, contra.value)
    .then((userCredentials) => {
        console.log(userCredentials);
        window.location.href = "main.html";
    })
    .catch((error) => {
        console.log(error.message);
    });
}

ingresarBoton.addEventListener("click", login);

onAuthStateChanged(auth, (user_account)=>{
    if (user_account){
       
        console.log("account", user_account);
        window.location.href = "main.html"
    }
});
