// 1 questão

function hello(args) {
    return `Olá ${args}!`;
}
// 2 questão
function question2(valor1, valor2, callabck) {
	console.log(callabck(valor1, valor2));
}
question2(12, 3, function (v1, v2) {
	return v1 - v2;
});
// 3 questão
function questao3(v1, callback) {
 return function questao3_2(){
     callback(v1,v2);
 }
}

var questao3PegaValores = questao3(12, function (v1,v2){
    if (v1 % v2 == 0) {
        return true;
    } else {return false};
})

questao3PegaValores(8);
// 4 questão

function meses(x) {
    switch (x) {
        case 1:
            return 'Janeiro';
            break;
        case 2:
            return 'Fevereiro';
            break;
        case 3:
            return 'Março';
            break;
        case 4:
            return 'Abril';
            break;
        case 5: 
            return 'Maio';
            break;
        case 6:
            return 'Junho';
            break;
        case 7:
            return 'Julho';
            break;
        case 8:
            return 'Agosto';
            break;
        case 9:
            return 'Setembro';
            break;
        case 10:
            return 'Outubro';
            break;
        case 11:
            return 'Novembro';
            break;
        case 12:
            return 'Dezembro';
            break;
        default:
            return 'Poxa comédia, põe de 1 a 12 aí, na moral.'
            break;
    }
}
// 5 questão
function questao5(v1, v2, callback) {
    console.log(callback(v1,v2));
}

questao5(40,23, function(v1,v2) {
    if(v1 >= v2) {
        return v1;
    }
}
