function imprimirMultiplos() {
    var 
        multiplos_de = parseInt(document.getElementById("numero_1").value), 
        limite_superior = parseInt(document.getElementById("numero_2").value), 
        resultado_field = document.getElementById("resultado"),
        cantidad = 0,
        serie_numeros = "",
        suma_acumulada = 0,
        resultado = null;
    
    for(i=multiplos_de; i<=limite_superior; i=i+multiplos_de) {
        serie_numeros = "" + serie_numeros + i + ((i == limite_superior || i+multiplos_de > limite_superior) ? "" : ", ");
        suma_acumulada += i;
        cantidad++;
    }
    
    resultado = "Suma: "+suma_acumulada+" <br />Serie de números ("+cantidad+"): "+serie_numeros+"";

    resultado_field.innerHTML = "El resultado de la operación es: "+resultado;
}