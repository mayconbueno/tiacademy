/*
var nome = "Marcelo"

console.log(nome.length);
console.log(nome[0]);//retornar a letra M


var palavras = "Maça doce";


*search
/*console.log( palavras.match(/D/gi) );


var str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente voluptate rerum veniam, officia "+
"alias facilis magnam minus nostrum illum, eveniet molestias, illo mollitia id expedita nobis? Recusandae, modi iusto?"

var mudarStr = str.replace(/nobis/gi,'Xxxx')

console.log(mudarStr);
*/


//localeCompare( )
/*
var comp1 = "Comparar";
var comp2 =- "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();

//console.log(`Este é co c1${c1} Este é o c2 ${c2}`);

var comparacao = c1.localeCompare(c2);
//console.log(comparacao);
*/


//trim() faz a remoção de espaços antes e depois da string especificada.

var p = '  fpalavra+ ';

var r = p.trim();
console.log(r)
console.log(p.replace(/f/gi, ''));
console.log(s)
sub a = s replace('+', '')
console.log(`Removido: ${sub a}`);

//toLocaleString
//formatação de moeda
var valor = 1.35 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-BR', {
	style: 'currency',
	currency: 'BRL'
})

console.log(formatarMoeda);