var nome = prompt("Digite o seu nome:"); 
var n = parseInt(prompt("Olá"+" "+ nome + ". Digite um número:"));

document.write("1. Seja bem vindo..: "+ nome + "<br/>");

document.write("2. Você digitou o número..: "+ n + "<br/>");

document.write("3. O retorno da comparação booleana é..:"+ (n==n) + "<br/>");

document.write("4. A soma dos valores é..:"+ (n+n) +"<br/>");

document.write("5. A subtração dos valores é..:"+ (n-n) +"<br/>");

document.write("6. O resto da divisão é de..:"+ (n%n) +"<br/>");

document.write("7. O quadrado do número digitado é..:"+ n*n);