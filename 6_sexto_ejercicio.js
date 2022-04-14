function convertirEscala() {
    var 
        celcius = parseInt(document.getElementById("numero_1").value), 
        resultado_field = document.getElementById("resultado"),
        farenheit = ((9/5)*celcius)+32,
        resultado = "";

    resultado = celcius+"° es equivalente a "+farenheit+"F";
    resultado_field.innerHTML = resultado;
}