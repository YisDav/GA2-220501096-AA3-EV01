function operacion() {
    var 
        tabla_vector = document.getElementById("vector"),
        resultado = null,
        vectorCreado = [
            [2,4,6,8],
            [3,6,9,12],
            [5,7,10,11],
        ],
        sumaFilas = [0,0,0],
        sumaColumnas = [0,0,0,0];

    let 
        row_id = document.createElement('tr'), 
        row_id2 = document.createElement('tr'), 
        cell_id_empty = document.createElement('td');

    row_id.appendChild(cell_id_empty);
    tabla_vector.appendChild(row_id);


    for(i = 0; i < vectorCreado.length; i++) 
    {
        let row = document.createElement('tr');

        // Suma filas y columnas
        for(j = 0; j < vectorCreado[i].length; j++) {
            
            if(i == 0){
                let cell_id = document.createElement('td');
                cell_id.innerHTML = "Columna "+(j+1);
                row_id.appendChild(cell_id);

                
                if(j+1 >= vectorCreado[i].length) {
                    let suma_fila = document.createElement('td')
                    suma_fila.innerHTML = "Suma fila "
                    row_id.appendChild(suma_fila);   
                }
            }

            if(j == 0) {
                let cell_id = document.createElement('td');
                cell_id.innerHTML = "Fila "+(i+1);
                row.appendChild(cell_id);
            }

            let 
                elementoActual = vectorCreado[i][j], 
                cell = document.createElement('td');    

            cell.innerHTML = String(elementoActual);
            row.appendChild(cell);

            sumaFilas[i] += elementoActual;
            sumaColumnas[j] += elementoActual;

            if(j+1 >= vectorCreado[i].length) {
                let cell_suma_fila = document.createElement('td')
                cell_suma_fila.innerHTML = sumaFilas[i];
                row.appendChild(cell_suma_fila);
            }
        }
        tabla_vector.appendChild(row);
    }

    let suma_columna = document.createElement('td');
    suma_columna.innerHTML = "Suma columna "
    row_id2.appendChild(suma_columna);
    tabla_vector.appendChild(row_id2);

    for(i = 0; i < sumaColumnas.length; i++) {
        let suma_columna_cell = document.createElement('td');
        suma_columna_cell.innerHTML = sumaColumnas[i];
        row_id2.appendChild(suma_columna_cell);
    }

}

operacion();