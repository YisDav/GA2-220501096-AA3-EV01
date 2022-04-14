function convertirHora() {
    var 
        formato_24h = parseInt(document.getElementById("numero_1").value),
        formato_12h = 0,
        esPM = false,
        resultado_field = document.getElementById("resultado"),
        resultado = ""; 
    
    if(formato_24h < 0 || formato_24h >= 24) {
        resultado = "Lo sentimos, hora inválida";
    }
    
    else {
        formato_12h = formato_24h;
        if(formato_24h >= 12) {
            esPM = true;
            if(formato_24h == 12)   formato_12h = formato_24h;
            else                    formato_12h = formato_24h-12;
        }
        else if (formato_24h == 0) {
            esPM = false;
            formato_12h = formato_24h+12;
        }

        resultado = "La hora "+formato_24h+":00 convertida en el nuevo formato es: "+ formato_12h + ":00" + ((esPM) ? "PM" : "AM");
    }
    
    resultado_field.innerHTML = resultado;
}