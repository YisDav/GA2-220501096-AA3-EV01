function realizarOperacion() {
    var 
        limInf = parseInt(document.getElementById("numero_1").value), 
        limSup = parseInt(document.getElementById("numero_2").value), 
        resultado_field = document.getElementById("resultado"),
        acumulado = 0,
        elementos = 0,
        resultado = "";


    i = limInf;
    if(i % 2 != 0){
        acumulado+=i;
        i++;
    }

    while(i <= limSup){
        console.log("Sumando (acumulado + actual): " + acumulado + " + " + i + " = " + (acumulado+i))
        acumulado+=i;

        elementos++;
        i = i+2;
    }


    resultado = "La sumatoria de los números pares desde " + 
                limInf + " hasta " + limSup + " es igual a: " + acumulado + "<br />" +
                "El número de elementos sumados fué de: " + elementos;
    resultado_field.innerHTML = resultado;
}