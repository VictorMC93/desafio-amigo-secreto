<h1>PROYECTO "AMIGO SECRETO"</h1>
<br>
Este sistema el usuario puede ingresar nombres de amigos con el objetivo de que una vez se encuentren todos los nombres deseados se haga clic en el boton "Sortear amigo" y el sistema entregue uno de los nombres al azar.
<br>
<h2>1er Paso: Agregar un nombre</h2>
<h3>Función</h3>
Dentro del código, para agregar nombres se utiliza principalmente la función "agregarAmigo()", la cual toma el valor ingresado por el usuario, lo convierte en variable de JS y esta es agregada al array "amigosLista" declarado antes de la función.  Junto a esto se verifica que el usuario ingrese un valor con un if, si el cuadro de texto esta vacío, se notificara para que sea corregido.  Finalmente una vez se ingresa exitosamente un valor, se vacía el área de texto para permitir que el usuario escriba otro nombre con facilidad.

<h3>Demostración</h3>
<h4>Cuadro de texto</h4>
<img width="480" alt="Foto 1" src="https://github.com/user-attachments/assets/e9e7540c-5f75-4b78-8e5e-81c450b4b938" />
<h4>Botón para añadir nombre</h4>
<img width="480" alt="Foto 2" src="https://github.com/user-attachments/assets/a08551f6-c902-42ad-a94b-2fc7a7c799de" />
<br>
<h2>2do Paso: Visualización lista de nombres</h2>
<h3>Función</h3>
Para mostrar el array de nombres añadidos se utiliza la función "generarListaAmigos()", mediante el elemento de lista <"ul">, almacenado en la variable "listaAmigos", se procede a vaciar la lista para evitar que hayan repeticiones cada vez que se ingrese un nombre, y después se ejecuta un bucle for para agregar el nombre en un elemento de la lista asociado a su ubicación en el array utilizado un incremento de nombre i.
<h3>Demostración</h3>
<h4>Nombre agregado</h4>
<img width="480" alt="Foto 3" src="https://github.com/user-attachments/assets/b6668e5c-9228-48c8-b26b-c95519aecca0" />

<h4>Varios nombres</h4>
<img width="480" alt="Foto 4" src="https://github.com/user-attachments/assets/0f734a28-5ab9-4149-8060-911e444a04a8" />
<br>
<h2>3er Paso: Sorteo de amigos</h2>
<h3>Función</h3>
En este caso se usa la función llamada sortearAmigo(), y dentro de esta se comienza utilizando un if que definirá que ocurrirá en el resto de la función, si no hay nombres en el array de la lista de amigos, se mostrara una alerta de que se requiere al menos un nombre, en caso contrario se procederá con el proceso de sorteo, para ello se tomara la cantidad total de elementos en el array (en la variable "numeroAmigos") y se utilizara para seleccionar un numero al azar utilizando el método Math.floor(Math.random()*numeroAmigos) en la variable seleccionAmigo, finalmente se llama al elemento HTML que mostrara el nombre que corresponda y se ingresa mediante innerHTML.
<h3>Demostración</h3>
<h4>Botón de sorteo</h4>
<img width="480" alt="Foto 5" src="https://github.com/user-attachments/assets/fc3836c4-2d06-4eea-a3c9-4c1fe2f85a61" />
<h4>Resultado</h4>
<img width="480" alt="Foto 6" src="https://github.com/user-attachments/assets/2a2126fd-aa6e-4013-b804-9932051f9684" />
