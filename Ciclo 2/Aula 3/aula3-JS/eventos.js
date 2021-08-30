
window.onload = function(){



	//alert("alerta");
	const btn1 = document.querySelector(".btnclick");
	const legP = document.querySelector(".legenda"); 
	const cxTexto = document.querySelector("#texto");
	btn1.addEventListener('click', ()=>{

/*click ao clicar em algum elemento HTML */

		//escrever no elemento
		legP.innerHTML += cxTexto.value;

});

cxTexto.addEventListener('click', ()=>{

	legP.innerHTML = '';

})



/*mousemove Ao mover o cursor do mouse acessa (entra) o elemento*/


/*trocar tipo do elemento */

const trocaSenha = document.querySelector("#versenha");
const cxSenha    = documentq.querySelector("#senha");

trocaSenha.addEventListener('click',()=>{
	//getAttribute()
	//getAttribute()
	if(cxSenha.getAttribute('type' ) =='password'){
		cxSenha.setAttribute('type', 'text')
	} else {
		cxSenha.setAttribute('type','password');
	}
})

	
	//alterar background da caixa de texto

	const cxTrocabg = document.querySelector("cxTbg");

	cxTrocaBg.addEventListener('blur', ()=>{

		cxTrocaBg.setAttribute('class', 'corBg');
	});

	//somar valores cx input text

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const btnSomar = document.querySelector("soma");
	const spResultado = document.querySelector("#resultado");

	btnSomar.addEventListener("click",()=>{

			var cx1 = valor1.value;
			var cx2 = valor2.value;
			var r = Number(cx1) + Number(cx2);querySelector

			spResultado.innerHTML = r;
//
	})

//alert("ola");

	 //Evento modal
	 const btnModal = document.querySelector("#chamarModal");
	 const janelaM = document.querySelector("#janModal");
	 

	 btnModal.addEventListener('click', ()=>{

	 	janelaM.setAttribute('class', 'modal');

	 })

		janelaM.addEventListener('click', ()=>{

	 	janelaM.classList.remove('modal' );
	 })
}
