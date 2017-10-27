// ORDENAR A-Z
var arrayTitulos = []
var arrayTitulosOrdAZ = []

function extraerTitulos(){
	arrayTitulos = []

	for (var i = 10; i < localStorage.getItem(0); i++) {
		if(localStorage.getItem(i) != null){
			var tituloItem = JSON.parse(localStorage.getItem(i)).titulo
			arrayTitulos.push(tituloItem)
		}
	}

	arrayTitulos = arrayTitulos.sort()
	return arrayTitulos
}

function ordenAZ(){
	for (var i = 0; i < arrayTitulos.length; i++) {
		var cont = 10
		for (var x = 10; x < localStorage.getItem(0); x++) {
			if(localStorage.getItem(x)!=null){
				var tituloItem = JSON.parse(localStorage.getItem(x)).titulo
				if(arrayTitulos[i]==tituloItem){
					var obj = 
					arrayTitulosOrdAZ.push()
					break
				}				
			}
		}
	}
}

// ORDENAR Z-A


// ORDENAR POR ID