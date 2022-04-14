function evaluarCampos() {
    var 
        numero_1 = parseInt(document.getElementById("numero_1").value), 
        numero_2 = parseInt(document.getElementById("numero_2").value), 
        numero_3 = parseInt(document.getElementById("numero_3").value), 
        resultado = null, 
        resultado_field = document.getElementById("resultado");
    
    if(numero_1 > 0)
        resultado = numero_2*numero_3;

    else resultado = numero_2+numero_3;
    
    resultado_field.innerHTML = "El resultado de la operación es: "+resultado;
}