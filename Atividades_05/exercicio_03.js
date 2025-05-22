let x = r1.questionFloat("informe o primeiro valor: ");
let y = r1.questionFloat("informe o segundo valor: ");
let op = r1.questionInt("escolha uma opção: \n[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão");

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`)
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`)
        break;
    case 3:
        console.log(`${x} . ${y} = ${x . y}`)
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`)
        break;

    default:
        console.log("selecione um numero valido")
        break;
}
