import readl from 'readline-sync';

let dia = readl.questionInt("Forneça u valor entre 1 e 7: ")
switch (dia) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-feira")
        break;
    case 3:
        console.log("Terça-feira")
        break;
    case 4:
        console.log("Quarta-feira")
        break;
    case 5:
        console.log("Quinta-feira")
        break;
    case 6:
        console.log("Sexta-feira")
        break;
    case 7:
        console.log("Sabado")
        break;
    default:
        console.log("Valor invalido !!!")
        break;
}