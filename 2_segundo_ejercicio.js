function evaluarCampos() {
    var 
        numero_1 = parseInt(document.getElementById("numero_1").value), 
        numero_2 = parseInt(document.getElementById("numero_2").value), 
        numero_3 = parseInt(document.getElementById("numero_3").value),
        resultado_field = document.getElementById("resultado"),
        resultado = null;
    
    if(numero_1 == numero_2+numero_3)
        resultado = ""+numero_1+" = "+numero_2+" + "+numero_3
    else if (numero_2 == numero_1+numero_3)
        resultado = ""+numero_2+" = "+numero_1+" + "+numero_3
    else if (numero_3 == numero_1+numero_2)
        resultado = ""+numero_3+" = "+numero_1+" + "+numero_2
    else 
        resultado = "La suma de dos de cualquiera de los tres números no da como resultado el elemento restante"
    
    resultado_field.innerHTML = "El resultado de la operación es: "+resultado;
}