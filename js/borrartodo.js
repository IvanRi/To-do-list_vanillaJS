// DISPLAY OPCION BORRAR TODO

var opBorrarTodo = document.getElementsByClassName('borrarTodo')[0]
var menuDeOpciones = document.getElementsByClassName('menuDeOp')[0]

document.getElementById('MostrarMenu').addEventListener('click' , opSi)

var estadoOpBT = true

function opSi(){
	if(estadoOpBT == true){
		menuDeOpciones.style.display="flex"
		estadoOpBT = false
	}else{
		menuDeOpciones.style.display="none"
		estadoOpBT = true
	}

	return estadoOpBT
}

//BORRAR TODO DE FORMA PERMANENTE

 opBorrarTodo.addEventListener('click' , removeAllBtn)
 opBorrarTodo.addEventListener('click' , opSi)

function removeAllBtn(){

	for(var i = sections.length -1 ; i >= 0; i--){
		main.removeChild(sections[i])
	}
	localStorage.clear()
	localStorage.setItem(0 , 10)
	extraerTitulos()
}

// FUNCION BORRAR TODOS PARA SOBRESCRIBIR

function removeAll(){

	for(var i = sections.length -1 ; i >= 0; i--){
		main.removeChild(sections[i])
	}
}