let valor = 13.1423241221321;
let text = "meu primeiro projeto em JavaScript";
let boleano = true;

console.log(valor.toFixed(2)); //arredonda o valor para duas casas decimais
console.log("tipo " + typeof valor); //Retorna o tipo da variavel
console.log(text.toUpperCase()); //coverte o texto para maiúsculas
console.log("tipo " + typeof text); //Retorna o tipo da variavel
console.log(boleano.toString()); //Converte para texto
console.log("tipo " + typeof boleano); //Retorna o tipo da variavel

let estados = ["São Paulo","Rondonia","Minas Gerais","Acre"]
let marcaCarros = [];
marcaCarros.push ("Subaru");
console.log(estados[2]);
console.log("tamanho " + estados.length); //Concatenação
console.log(marcaCarros[0]);
console.log("total letras: " + marcaCarros[0].length);
console.log(`Estado: ${estados[1]}`); //Interpolação

letusuario; //variavel não definida
console.log(usuario);
console.log(usuario.length);

let idade = 10;
console.log(idade + 1);

let nula = null;//caso o valor de idade fosse 0 daria o erro: (NAN)
console.log(nula.length);
console.log(nula + 1);

const aula = "JavaScript";
console.log(aula)