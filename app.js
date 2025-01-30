// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista=[]; //Array de amigos ingresados
let resultadoSorteo;
function agregarAmigo() { //Funcion para agregar nombres a array
    let amigoAgregado=document.getElementById('amigo').value; //añade el contenido escrito por el usuario a variable
    if (amigoAgregado==''){ //si el usuario no escribe nada
        alert('Por favor, inserte un nombre.');
    }else{ //agrega nombre a array y limpia campo de entrada
        amigosLista.push(amigoAgregado);
        document.getElementById('amigo').value='';
        console.log(amigosLista);
        generarListaAmigos();
    }
    return;
}
function generarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); //Obtener la lista HTML y asignar variable
    listaAmigos.innerHTML = ""; //Vaciar la lista cada vez que se agrega un nombre
    for (i = 0; i < amigosLista.length; ++i) { 
        let li = document.createElement('li'); //crear elemento de lista
        li.innerText = amigosLista[i]; //asignar nombre de lista equivalente a indice i
        listaAmigos.appendChild(li);  //
    }
    resultadoSorteo.innerHTML='';
    return;
}

function sortearAmigo() {
    if (amigosLista.length==0) {
        alert('Debe agregar al menos un nombre');
    }else{
        let numeroAmigos=amigosLista.length;
        let seleccionAmigo= Math.floor(Math.random()*numeroAmigos);
        console.log(seleccionAmigo);
        resultadoSorteo= document.getElementById('resultado');
        resultadoSorteo.innerHTML=amigosLista[seleccionAmigo];
    }
}