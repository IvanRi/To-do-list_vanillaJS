//CHECKEAR COMPLETADO

function checkCompletado(x){
		if(elementosParseados[x].completado == true){
		document.getElementById(`c${elementosParseados[x].id}`).style.color ="black"
		document.getElementById(`titulo${elementosParseados[x].id}`).style.textDecoration = "line-through"
		document.getElementById(`id${elementosParseados[x].id}`).style.backgroundColor = "lightgrey"
	}
}

//COMPLETADO Y DESCOMPLETADO

function agregarAEL(){
	for (var i = 1; i < idNuevo; i++) {
		var elC = document.getElementById(`c${i}`)
		if(elC != null){
			elC.addEventListener('click' , compleDescomple )
		}
	}
}

function compleDescomple(e){
	var completadoId = e.currentTarget.id
	var aString = Number(completadoId.substring(1))
	for (var i = 0; i < elementosParseados.length; i++) {
		if(elementosParseados[i].id == aString){
			if(elementosParseados[i].completado == false){
				e.currentTarget.style.color ="black"
				document.getElementById(`titulo${aString}`).style.textDecoration = "line-through"
				document.getElementById(`id${aString}`).style.backgroundColor = "lightgrey"
				elementosParseados[i].completado = true
				setLS(elementosParseados[i])
			}else{
				e.currentTarget.style.color ="#F0F66E"
				document.getElementById(`titulo${aString}`).style.textDecoration = "none"
				document.getElementById(`id${aString}`).style.backgroundColor = "#F0F66E"
				elementosParseados[i].completado = false
				setLS(elementosParseados[i])
			}			
		}
	}
}