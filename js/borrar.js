//BORRAR DE A UNO

function removeOne(e){
	var completadoId = e.currentTarget.id
	var aString = Number(completadoId.substring(2))
	elementosParseados.splice(aString , 1)
	for (var i = 0; i < idNuevo; i++){
		if(elementosParseados[i]!=undefined){
			if(elementosParseados[i].id==aString){
				localStorage.removeItem(elementosParseados[i].id)
				getLS()
			}			
		}
	}
}

function agregarAELel(){
	for (var i = 1; i < idNuevo; i++) {
		var elC = document.getElementById(`el${i}`)
		var edC = document.getElementById(`ed${i}`)
		if(elC != null){
			elC.addEventListener('click' , removeOne )
			edC.addEventListener('click' , editEl)
		}
	}
}