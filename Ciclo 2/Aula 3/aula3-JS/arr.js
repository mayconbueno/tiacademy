/*concat() junta os elementos qde dois ou mais arrays e retorna uma cópia com elementos juntos*/

var frutas= ["Uva", "Banana", "Amora", "Melao"]; // var frutas = Array()
console.log(`Qtd do array: ${frutas.length} fruta: ${frutas[0]}`);

var frutas2 = ["Maça", "Pera", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas) ;

/*indexOf() procura por um elemtnos específico no array e retorna a sua posição*/
var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);//2


/*join() Junta todos os elementos de um array em uma string*/

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);


/*push() insere um novo elemento no final do array */

var outraLista = ["bola", "Peteca"];
var novaLista = outraLista.push("Boneca","Qualquer brinquedo");

console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3])



/*pop() remove o último elemento do array*/

console.log(outraLista.pop())

console.log(outraLista);

/*reverse() inverte a ordem dos eementos do array */

console.log(outraLista.reverse());

/*shift() remove o primeiro elemento do array*/
var removerPrimeiro = ["fusca", "variant"];
console.log(removerPrimeiro.shift());
console.log(removerPrimeiro);

/*sort()Ordena os elementos do array em ordem crescente*/

var alfa = [4,6,9,2];
alfa.sort();
console.log(alfa);

/*unshift()converte um array em string e retorna essa string*/

alfa.unshift(10)
console.log(alfa);

/*splice() corta o array em um ponto indicado dois parametros indice e quantos elementos quer remover a partir da posição*/

var f= ["Uva", "Banana", "Amora", "Melao"]; // var frutas = Array()
var idx = f.indexOf("Banana")
console.log(idx);
console.log( f.splice(idx), 1)
console.log(f);


// arrays de objetos

var dados = [
				{nome:"Marcelo"},//0
				{nome:"Raphael"}//1
			]
//console.log(dados [0].nome )
//console.log(dados [1].nome)

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this,nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg : doc[0],
		cpf : doc[1]
	}
}

var pessoa2 = new Pessoa2("Raphael", "","",['22', '555']);
// console.log("Nome "+pessoa2.nome+" "+pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - cpf: ${pessoa2.doc.cpf}`);
