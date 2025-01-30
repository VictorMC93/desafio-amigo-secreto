let amigosLista=[]; //Array de amigos ingresados
let resultadoSorteo; //Se declara para su uso en las funciones generarListaAmigos() y sortearAmigo()
function agregarAmigo() { //Funcion para agregar nombres a array
    let amigoAgregado=document.getElementById('amigo').value; //añade el contenido escrito por el usuario a variable
    if (amigoAgregado==''){ //si el usuario no escribe nada
        alert('Por favor, inserte un nombre.');
    }else{ //agrega nombre a array y limpia campo de entrada
        amigosLista.push(amigoAgregado);
        document.getElementById('amigo').value='';
        generarListaAmigos();
    }
    return;
}
function generarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); //Obtener la lista HTML y asignar variable
    listaAmigos.innerHTML = ""; //Vaciar la lista cada vez que se agrega un nombre
    for (i = 0; i < amigosLista.length; ++i) { //For para enviar el nombre escrito a lista HTML
        let li = document.createElement('li'); //crear elemento de lista
        li.innerText = amigosLista[i]; //asignar nombre de lista equivalente a indice i
        listaAmigos.appendChild(li);  // Ingresa el nombre en la lista
    }
    resultadoSorteo.innerHTML=''; // Borrar texto de nombre seleccionado al momento de agregar uno nuevo
    return;
}

function sortearAmigo() {
    if (amigosLista.length==0) { //if para caso de que se presione boton sin nombres en el array
        alert('Debe agregar al menos un nombre');
    }else{
        let numeroAmigos=amigosLista.length; //Toma el total de nombres en el array
        let seleccionAmigo= Math.floor(Math.random()*numeroAmigos); // Elige un numero entre 0 y la variable anterior
        resultadoSorteo= document.getElementById('resultado'); //Obtener elemento que mostrara el resultado mediante su id
        resultadoSorteo.innerHTML=amigosLista[seleccionAmigo]; //Ingresa el nombre al elemento HTML y aparece en la pantalla
    }
    return;
}