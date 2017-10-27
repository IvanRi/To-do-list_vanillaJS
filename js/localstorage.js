//TRANFORMANDO DATOS EN STRING

function setLS(nuevaTarea){
	localStorage.setItem(nuevaTarea.id , JSON.stringify(nuevaTarea))
}

function setLSID(nuevaTarea){
	localStorage.setItem(0 , nuevaTarea)
}

var element = []

function keysElement(){
	
	element = []
	for (var i = 1; i < localStorage.length; i++) {
		element.push(localStorage.key(i))
	}
	return element
}

// PARSEAR DATOS DEL LOCAL STORAGE

function getLSElements(){
	elementosParseados = []

	keysElement()

	for (var i = 0; i < element.length; i++){
		elementosParseados.push(JSON.parse(localStorage.getItem(element[i])))
	}
}

//INICIA LOCALSTORAGE CON IDNUEVO = 1

if(localStorage.getItem(0)==null){
	localStorage.setItem(0,10)
}else if (localStorage.length == 1) {
	localStorage.setItem(0,10)	
}