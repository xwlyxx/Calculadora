const prompt = require("prompt-sync")();

var escolha;
var z,y;

var escolha = prompt("Escolha a operação: Adição(+), subtração(-), multiplicação(*), divisão(/), porcentagem(%), Potenciação(^), Raiz Quadrada(V): ");

if (escolha === "+") {
    console.log("Escolha os números desejados: ");
    var z = parseFloat(prompt("numero 1: "));
    var y = parseFloat(prompt("numero 2: "));
    console.log("Resposta: " + (z + y));
} else if (escolha === "-"){
    console.log("Escolha os números desejados: ");
    var z = parseFloat(prompt("numero 1: "));
    var y = parseFloat(prompt("numero 2: "));
    console.log("Resposta: " + (z - y));
} else if (escolha === "*"){
    console.log("Escolha os números desejados: ");
    var z = parseFloat(prompt("numero 1: "));
    var y = parseFloat(prompt("numero 2: "));
    console.log("Resposta: " + (z * y));
} else if (escolha === "/"){
    console.log("Escolha os números desejados: ");
    var z = parseFloat(prompt("numero 1: "));
    var y = parseFloat(prompt("numero 2: "));
    console.log("Resposta: " + (z / y));
} else if(escolha === "%"){
    console.log("Insira o número inteiro e a porcentagem desejada: ");
    var z = parseFloat(prompt("numero 1: "));
    var y = parseFloat(prompt("numero 2: "));
    console.log("Resposta: " + (z * (y / 100)).toFixed(3));
} else if(escolha === "^"){
    console.log("Insira o número inteiro e o expoente desejado: ");
    var z = parseFloat(prompt("numero 1: "));
    var y = parseFloat(prompt("numero 2: "));
    console.log("Resposta: " + Math.pow(z, y).toFixed(3));
} else if(escolha === "V"){
    console.log("Insira o número que deseja a raiz: ");
    var z = parseFloat(prompt("numero: "));
    console.log("Resposta: " + Math.sqrt(z).toFixed(3));
} else {
    console.log("Me desculpe, mas esse comando não existe!")
}