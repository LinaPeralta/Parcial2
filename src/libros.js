import {getDatabase, ref, set, onValue, push,update} from "firebase/database";

export class libros{

    constructor(libro){
  
        this.libro = libro;
    }

    //items de los libros
    crearItem(){

     let card = document.createElement("div");
     card.className = "carta";

     let nombreLibro = document.createElement("h2");
     nombreLibro.className = "libroNombre";
     nombreLibro.innerHTML= this.libro.Nombre;

     let votosLibro = document.createElement("h3");
     votosLibro.className = "libroVotos";
     votosLibro.innerHTML= this.libro.Votos;

     let unoBtn = document.createElement("button");
     let dosBtn = document.createElement("button");
     let tresBtn = document.createElement("button");
     let cuatroBtn = document.createElement("button");
     let cincoBtn = document.createElement("button");

     unoBtn.className = "unoBoton";
     dosBtn.className = "dosBoton";
     tresBtn.className = "tresBoton";
     cuatroBtn.className = "cuatroBoton";
     cincoBtn.className = "cincoBoton";

     unoBtn.innerHTML = "1";
     dosBtn.innerHTML = "2";
     tresBtn.innerHTML = "3";
     cuatroBtn.innerHTML = "4";
     cincoBtn.innerHTML = "5";

  
     card.appendChild(nombreLibro);
     card.appendChild(unoBtn);
     card.appendChild(dosBtn);
     card.appendChild(tresBtn);
     card.appendChild(cuatroBtn);
     card.appendChild(cincoBtn);
     card.appendChild(votosLibro);

     let votos = 0;

      //cuando haga click en el boton que sume el promedio
      //una estrella
      unoBtn.addEventListener("click",(e,event)=>{

        votos++;
        console.log(votos);
        const db = getDatabase();
        const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

        update(referenciaVotos, {"Votos": votos});

     });

     //dos estrellas
     dosBtn.addEventListener("click",(e,event)=>{

        votos+=2;
        console.log(votos);
        const db = getDatabase();
        const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

        update(referenciaVotos, {"Votos": votos});

     });

     //tres estrellas
     tresBtn.addEventListener("click",(e,event)=>{

        votos+=3;
        console.log(votos);
        const db = getDatabase();
        const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

        update(referenciaVotos, {"Votos": votos});

     });

     //cuatro estrellas
     cuatroBtn.addEventListener("click",(e,event)=>{

        votos+=4;
        console.log(votos);
        const db = getDatabase();
        const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

        update(referenciaVotos, {"Votos": votos});

     });

     //cinco estrellas
     cincoBtn.addEventListener("click",(e,event)=>{

        votos+=5;
        console.log(votos);
        const db = getDatabase();
        const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

        update(referenciaVotos, {"Votos": votos});

     });


      return card;
    }
}
