var nome = prompt("Digite o seu nome:"); 
var numero = prompt(nome + "digite um numero para comparar com 'n'");
var n = Math.round(Math.random() * (30 - 1));
numero = parseInt(numero);
var bolea = (numero === n);
var soma = numero + n;
var subtra = numero -n;
var divs = numero%n;
var quadrad = numero**2;

function verifcNome(){
	if(typeof(nome) === typeof(string())){
		document.write("o nome que você digitou é uma string <br>");
		alert("uma string foi enviada");
	} 	else{
		document.write("você digitou um numero inteiro <br>");
}

function verificNumero(){
	if(typeof(numero) === typeof(string())){
		document.write("o número que você digitou é uma string <br>")
	}	else{
	document.write("você digitou um número inteiro <br>")
	alert("a string sera convertida para número")
	}
}

verificNome();

verificNumero();

document.write("1. Seja bem vindo..: "+ nome + "<br/>");

document.write("2. Você digitou o número..: "+ "("+numero +")" + "<br/>");

document.write("3. O retorno da comparação booleana é..:"+ bolea + "<br/>");

document.write("4. A soma dos valores é..:"+ soma + "<br/>");

document.write("5. A subtração dos valores é..:"+ subtra +"<br/>");

document.write("6. O resto da divisão é de..:"+ divs + "<br/>");

document.write("7. O quadrado do número digitado é..:"+ quadrad +"<br/>");