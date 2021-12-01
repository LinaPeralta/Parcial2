import {getDatabase, ref, set, onValue, push} from "firebase/database";

export class libros{

    constructor(libro){
  
        this.libro = libro;
    }


    //items de los libros
    crearItem(){

     let rect = document.createElement("div");
     rect.className = "card";

     let nombreLibro = document.createElement("h3");
     nombreLibro.className = "libroNombre";
     nombreLibro.innerHTML= "Harry Potter";

     rect.appendChild(nombreLibro);




      return rect;
    }



}