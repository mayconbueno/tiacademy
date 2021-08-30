/*Faça um programa que receba quatro
números inteiros, calcule e mostre a soma desses números.*/

soma = 0;

numero = parseInt(prompt("Insira o primeiro número."));
soma = soma + numero;

numero = parseInt(prompt("Insira o segundo número."));
soma = soma + numero;

numero = parseInt(prompt("Insira o terceiro número."));
soma = soma + numero;

numero = parseInt(prompt("Insira o quarto número."));
soma = soma + numero;


console.log("O resultado é", soma);