$(document).ready(function(){

	$("#decimal").keyup(function () {

		var decimal = $(this).val();

		$("#binario").val((toBinario(decimal)));

	});


	$("#decimal").change(function () {

		var decimal = $(this).val();

		$("#binario").val((toBinario(decimal)));

	});

	$("#binario").keyup(function () {

		var binario = $(this).val();

		if(verificaCampo(binario,"[2-9]")){
			$(this).css('border-color','red');
			$("[data-toggle='tooltip']").tooltip('show');
		}else{
			$(this).css('border-color','blue');
			$("[data-toggle='tooltip']").tooltip('hide');
			$("#decimal").val((binarioToDecimal(binario)));
		}

	});


	$("#binario").change(function () {

		var binario = $(this).val();

		if(verificaCampo(binario,"[2-9]")){
			$(this).css('border-color','red');
			$("[data-toggle='tooltip']").tooltip('show');
		}else{
			$(this).css('border-color','blue');
			$("[data-toggle='tooltip']").tooltip('hide');
			$("#decimal").val((binarioToDecimal(binario)));
		}

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

//Converte um número binário para decimal
function binarioToDecimal(binario) {
	
	var arrayBinario = reverse(binario);

	var decimal = 0;

	for (var i = 0; i < arrayBinario.length; i++) {
		
		if (i == 0 && (parseInt(arrayBinario[i]) == 1)) {
			decimal =1;
		}else if((parseInt(arrayBinario[i]) == 1)){
			decimal += Math.pow(2,i) ;
		}
	}

	return decimal;
}

function verificaCampo(text, regex) {
	return new RegExp(regex).test(text);
}