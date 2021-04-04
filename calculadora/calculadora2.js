

var resultado = primeiroValor / segundoValor;
  
document.write("<h2>"+ primeiroValor +" / " +segundoValor +" = "+ resultado + "</h2>");

}else if (operacao == 2){
var resultado = primeiroValor * segundoValor;

document.write("<h2>"+ primeiroValor + " * " + segundoValor +" = "+ resultado + "</h2>");

}else if(operacao == 3){
var resultado = primeiroValor + segundoValor;

document.write("<h2>" + primeiroValor + " + "+ segundoValor + " = "+ resultado + "</h2>")

}else if(operacao == 4){
var resultado = primeiroValor - segundoValor;

document.write("<h2>"+ primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>");
}else {
document.write("<h2> Opção Inválida </h2>");
}


//escrevendo na tela - document.write()

//concatenação (juntar palavra com variaveis)- ("palavra"+ variavel)

// == - comparação é diferente do = que usamos para fazer atribuição

//if = se
// else = senão
// else if = senão se
//h2 - write - if - else if - 
