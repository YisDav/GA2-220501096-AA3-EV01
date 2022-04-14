function realizarOperacion() {
    var 
        base = parseInt(document.getElementById("numero_1").value), 
        limSuperior = parseInt(document.getElementById("numero_2").value), 
        resultado_field = document.getElementById("resultado"),
        resultado = "";

    for(i = 0; i <= limSuperior; i++) {
        var resultado_potencia = calcPotenciaPositiva(base, i);
        if(resultado_potencia <= 100) {
            resultado = resultado+"<br />"+base+"^"+i+" = "+resultado_potencia;
        }
    }

    resultado_field.innerHTML = "El resultado de la operación es: "+resultado;
    
}

function calcPotenciaPositiva(base, exponente) {
    
    switch (exponente) {
        case 1:
            return base;
            break;
        case 0:
            return 1;
            break;
    }

    var resultado = 1;

    for(i = 0; i < exponente; i++) {
        resultado = resultado*base;
    }

    return resultado;
}