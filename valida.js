et valida = function(strInput){
    var regex = /^[0-9.]+$/;
    if(!regex.test(key)){
		console.log("nao e numero")
		return false

	}else{
		return true;
	}
}
input1.addEventListener('keyup',function(e){
	key = e.key;
	let valueInput = input1.value
	if(valida(key) == false){
		
		if(key == 'Backspace' || key == 'Delete'){
			e.returnValue = true;
		}else{
			e.returnValue = false;
		}
		

	}else{

		if(valueInput.length == 8){
           console.log(valueInput + " => OK")
		}
	}
})
