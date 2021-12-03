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
     votosLibro.innerHTML= this.libro.Promedio;

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


      //cuando haga click en el boton que sumen los votos y calcule el promedio

      //una estrella
      unoBtn.addEventListener("click",(e,event)=>{

         const db = getDatabase();
        
         const votacion = ref(db,"Libros/"+this.libro.ID + "/" + "Votos");
         const cant = ref(db,"Libros/"+this.libro.ID + "/" + "CantVotos");
         const prom = ref(db,"Libros/"+this.libro.ID + "/" + "Promedio");
   
 
         this.libro.CantVotos ++;
         this.libro.Votos +=1;
         //calcular el promedio
         this.libro.Promedio = (this.libro.Votos/this.libro.CantVotos).toFixed(1);
 
        // const referenciaVotos = ref(db,"Libros/"+this.libro.ID);
 
         
         set(votacion, this.libro.Votos);
         set(cant, this.libro.CantVotos);
         set(prom, this.libro.Promedio);

     });


     //dos estrellas
     dosBtn.addEventListener("click",(e,event)=>{

        const db = getDatabase();
        
        const votacion = ref(db,"Libros/"+this.libro.ID + "/" + "Votos");
        const cant = ref(db,"Libros/"+this.libro.ID + "/" + "CantVotos");
        const prom = ref(db,"Libros/"+this.libro.ID + "/" + "Promedio");

        this.libro.CantVotos ++;
        this.libro.Votos +=2;
        //calcular el promedio
        this.libro.Promedio = (this.libro.Votos/this.libro.CantVotos).toFixed(1);

       // const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

        set(votacion, this.libro.Votos);
        set(cant, this.libro.CantVotos);
        set(prom, this.libro.Promedio);

     });

  

     //tres estrellas
     tresBtn.addEventListener("click",(e,event)=>{

        const db = getDatabase();

        const votacion = ref(db,"Libros/"+this.libro.ID + "/" + "Votos");
        const cant = ref(db,"Libros/"+this.libro.ID + "/" + "CantVotos");
        const prom = ref(db,"Libros/"+this.libro.ID + "/" + "Promedio");

        this.libro.CantVotos ++;
        this.libro.Votos +=3;
        //calcular el promedio
        this.libro.Promedio = (this.libro.Votos/this.libro.CantVotos).toFixed(1);

       // const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

       set(votacion, this.libro.Votos);
       set(cant, this.libro.CantVotos);
       set(prom, this.libro.Promedio);
       

     });

     //cuatro estrellas
     cuatroBtn.addEventListener("click",(e,event)=>{

        const db = getDatabase();
        const votacion = ref(db,"Libros/"+this.libro.ID + "/" + "Votos");
        const cant = ref(db,"Libros/"+this.libro.ID + "/" + "CantVotos");
        const prom = ref(db,"Libros/"+this.libro.ID + "/" + "Promedio");

        this.libro.CantVotos ++;
        this.libro.Votos +=4;
        //calcular el promedio
        this.libro.Promedio = (this.libro.Votos/this.libro.CantVotos).toFixed(1);

       // const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

        set(votacion, this.libro.Votos);
        set(cant, this.libro.CantVotos);
        set(prom, this.libro.Promedio);


     });

     //cinco estrellas
     cincoBtn.addEventListener("click",(e,event)=>{

        const db = getDatabase();

        const votacion = ref(db,"Libros/"+this.libro.ID + "/" + "Votos");
        const cant = ref(db,"Libros/"+this.libro.ID + "/" + "CantVotos");
        const prom = ref(db,"Libros/"+this.libro.ID + "/" + "Promedio");

        this.libro.CantVotos ++;
        this.libro.Votos +=5;
        //calcular el promedio
        this.libro.Promedio = (this.libro.Votos/this.libro.CantVotos).toFixed(1);

       // const referenciaVotos = ref(db,"Libros/"+this.libro.ID);

       set(votacion, this.libro.Votos);
       set(cant, this.libro.CantVotos);
       set(prom, this.libro.Promedio);
      

     });


      return card;
    }
}
