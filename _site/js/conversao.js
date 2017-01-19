$(document).ready(function(){
    
    $("#decimal").keyup(function () {

    	var decimal = $(this).val();

    	 $("#binario").val((toBinario(decimal)));
    });


     $("#decimal").change(function () {

    	var decimal = $(this).val();

    	 $("#binario").val((toBinario(decimal)));
    });
   
});

//Converte um número decimal para binário
function toBinario(decimal) {

	var novoValor = parseInt(decimal);

	var binario = "";

	if(novoValor <= 0){
		return "0";
	}

	while(novoValor > 0){
		
		binario += ""+(novoValor % 2);

		novoValor = parseInt(novoValor / 2);
		 
	}

	return reverse(binario);
}

//Reverte os caracteres de um texto
function reverse(text) {

 return text.split("").reverse().join("");
 
}