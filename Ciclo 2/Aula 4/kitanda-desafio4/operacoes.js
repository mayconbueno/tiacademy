window.onload  = function(){

// produtos
(()=>{
	let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

	for(let idx in produtos){
		mostrarProdutosCliente.innerHTML += `<li class='itemProduto' data-precos=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
	}
})(produtos)

//Compra

const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
var armazenaItens =[];
var totalPedido = 0;
var itemCesta

itemProduto.forEach((item)=>{
	item.addEventListener('click', ()=>{
		li = document.createElement('li');
		li.className = 'itemCesta'; 
		li.dataset.precos = item.dataset.precos;

		if(armazenaItens.indexOf(item.textContent) == -1){
			armazenaItens.push(item.textContent);

			itemCesta = cestaDoCliente.appendChild(li);
			itemCesta.textContent = item.textContent;
			
			itemCesta.addEventListener('click', (foco)=>{
				armazenaItens.splice(armazenaItens.indexOf(foco.target.textContent),1);
				cestaDoCliente.removeChild(foco.target);
				totalPedido -= Number(foco.target.dataset.precos);
				mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
			});

			totalPedido += Number(item.dataset.precos);
			mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
				
		}else{
			alert(`Este item ${item.textContent} já está na sua cesta`);
		};
	});

});
}

const itensDaCesta = document.querySelectorAll("#cestaDoCliente > li.itemDaCesta"); //Nova
	itensDaCesta.forEach((cesta)=>{
		cesta.addEventListener('click', ()=> {
		console.log(`Selecionado o produto ${cesta.textContent}`);
	})
})
