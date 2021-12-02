
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

const book = document.getElementById("books");


function obtenerLibros(){
    
    const db = getDatabase();
    const reference = ref(db, 'Libros');

    onValue(reference, (snapshot) => {
        const info = snapshot.val();
        pintarLibros(info);
    });
}

function pintarLibros(info){
    if(info){
        book.innerHTML = "";
        

        Object.keys(info).forEach((k, index) => {
            const cartas = new libros(info[k]);
            book.appendChild(cartas.crearItem());
           
        });
    }
}

obtenerLibros();




