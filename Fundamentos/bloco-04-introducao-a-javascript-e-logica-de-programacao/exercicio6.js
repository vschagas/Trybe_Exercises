console.log ("*****exercicio 06*****");

//peão, torre, cavalo, bispo, dama, rei
let a = 'tore';

switch ( a ) {
    case 'peão': 
        console.log('Anda uma casa para frente');
        break;
    case 'torre':
        console.log("Anda quantas casas quiser para frente ou para o lado");
        break;

    case 'cavalo':
        console.log('Anda em movimentos L');
        break;

    case 'bispo':
        console.log('Anda na diagonal na cor de sua casa inicial');
        break;

    case 'dama':
        console.log('Anda quantas casas quiser em qualquer direção');
        break;

    case 'rei':
        console.log('Anda apenas uma casa em qualquer direção');
        break;

    default:
        console.log('Peça inválida');
}
