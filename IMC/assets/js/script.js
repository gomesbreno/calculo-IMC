function calcularIMC(){
    var altura = Number(document.getElementById("altura").value);
    var peso = Number(document.getElementById("peso").value);

    console.log(altura);
    console.log(peso);
    console.log(peso/(altura*altura));

    
    var resultado = peso/(altura*altura); //Peso ÷ altura x altura
    document.getElementById("resultado").value = resultado

}
