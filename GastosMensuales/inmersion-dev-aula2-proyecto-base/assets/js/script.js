let listaNombresGastos = [];
let listaValoresGastos = [];


function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos')
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion])
        htmlLista += `<li>${elemento} - pesos ${valorGasto.toFixed} 
                    <button onclick="eliminarGasto(${posicion});"> Eliminar</button> 
                    </li>`;

        //Calcula el total de los gasto haciendo una suma
        totalGastos += Number(valorGasto);
        console.log(totalGastos);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();

}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){

    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}