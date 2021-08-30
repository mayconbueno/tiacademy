salario = parFloat(prompt("insira i salario:"));AbortController

bonif -0 = 

if (salario <= 500){
	bonif = salario * 0.05;

} else if (salario >=500.01 && salario <= 1200){
	bonif = salario * 0.12;
}

console.log("debug - bonif", bonif);

aux = 0;

if (salario <= 600){
	aux -150;
} else {
	aux = 600;
}

console.log("debug - aux", aux);

salario - salario + bonif + aux;

console.log("salario final: R$", salario.toFixed(2));