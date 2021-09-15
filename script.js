function resultado() {
    var nota1 = document.getElementById("valor1");
    var nota2 = document.getElementById("valor2");
    var nota3 = document.getElementById("valor3");
    var nota4 = document.getElementById("valor4");
    var nota5 = document.getElementById("valor5");
    
    var peso1 = document.getElementById("peso1");
    var peso2 = document.getElementById("peso2");
    var peso3 = document.getElementById("peso3");
    var peso4 = document.getElementById("peso4");
    var peso5 = document.getElementById("peso5");
 
    nota1 = nota1.value;
    nota2 = nota2.value;
    nota3 = nota3.value;
    nota4 = nota4.value;
    nota5 = nota5.value;

    peso1 = peso1.value;
    peso2 = peso2.value;
    peso3 = peso3.value;
    peso4 = peso4.value;
    peso5 = peso5.value;

    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    nota4 = parseFloat(nota4);
    nota5 = parseFloat(nota5);

    peso1 = parseFloat(peso1);
    peso2 = parseFloat(peso2);
    peso3 = parseFloat(peso3);
    peso4 = parseFloat(peso4);
    peso5 = parseFloat(peso5);

    console.log(nota1);
    console.log(nota2);
    console.log(nota3);
    console.log(nota4);
    console.log(nota5);

    console.log(peso1);
    console.log(peso2);
    console.log(peso3);
    console.log(peso4);
    console.log(peso5);

    var total = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5);
    var divisor = peso1 + peso2 + peso3 + peso4 + peso5;
    var media = total / divisor;

    media = "Sua media final é " + media;
    console.log(media);

    document.getElementById("resultadoTela").innerHTML = media;

}