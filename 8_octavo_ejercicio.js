function realizarOperacion() {
    var 
        stringCaracteres = String(document.getElementById("field_1").value), 
        longitudString = stringCaracteres.length,
        resultado_field = document.getElementById("resultado"),
        resultado = "";

    
    if(longitudString != 5) {
        resultado = "Ingresa una cadena de texto de únicamente 5 caracteres"
    }
    else {
        miVector_reversed = stringCaracteres.split('').reverse();
        var vectorReversadoString = miVector_reversed.toString();
        resultado = "El vector reversado, convertido de nuevo a string, es: "+vectorReversadoString;
    }
        
    
    resultado_field.innerHTML = resultado;
}