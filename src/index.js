
import {getFirebaseConfig} from './firebase-config.js';

// Modulos de firebase a utilizar
import { initializeApp } from 'firebase/app';
import {getDatabase, ref, get, onValue} from 'firebase/database';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {libros} from "./libros";


const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const db = getDatabase();
const auth = getAuth();

const nobono = document.getElementById("nonbono");


function pintarLibros(){
    nobono.innerHTML="";
    bonoPlata.innerHTML="";
    bonoOro.innerHTML="";

}
