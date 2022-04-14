function realizarOperacion() {
    var 
        nota_1 = parseInt(document.getElementById("numero_1").value), 
        nota_2 = parseInt(document.getElementById("numero_2").value), 
        nota_3 = parseInt(document.getElementById("numero_3").value),
        nota_4 = parseInt(document.getElementById("numero_4").value), 
        nota_5 = parseInt(document.getElementById("numero_5").value),
        resultado_field = document.getElementById("resultado"),
        resultado = null;
    
    var listaDeNotas = [nota_1, nota_2, nota_3, nota_4, nota_5],
        listaDeNotasString = listaDeNotas.toString(),
        promedio = (nota_1+nota_2+nota_3+nota_4+nota_5)/5,
        masAlta = nota_1,
        masBaja = nota_1;
    
    listaDeNotas.forEach(notaActual => {
        if(notaActual >= masAlta)
            masAlta = notaActual;

        if(notaActual <= masBaja)
            masBaja = notaActual;
    });

    resultado = "La lista de notas es: "+listaDeNotasString+'<br />'+
                "El promedio fue de: "+promedio+'<br/ >'+
                "La nota más alta fue: "+masAlta+'<br/ >'+
                "La nota más baja fue: "+masBaja+'<br/ >';
    
    resultado_field.innerHTML = resultado;

}