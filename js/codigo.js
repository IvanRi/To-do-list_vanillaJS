//PERSISTENCIA DE DATOS
window.addEventListener('load' , getLS)

var elementosParseados = []

function getLS(){

	removeAll()

	elementosParseados = []

	keysElement()

	for (var i = 0; i < element.length; i++){
		elementosParseados.push(JSON.parse(localStorage.getItem(element[i])))
	}
	for (var x = 0; x < elementosParseados.length; x++) {

		var nuevoElemento = document.createElement('section')

		nuevoElemento.innerHTML= elementosParseados[x].html

		main.appendChild(nuevoElemento)	
	}
	agregarAEL()

	return elementosParseados
}

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

//insertar tarea

var main = document.getElementById('main')

var sections = document.getElementsByTagName('section')

function generarTarea (){
	var newTarea = setValue()

	if(newTarea.titulo == ""){
		document.getElementById('error-vacio').innerHTML =(`<span class="ion-android-arrow-dropup flecha-vacio"></span>Este campo es obligatorio.`)
		document.getElementById('error-vacio').style.display = "inline-block"
	}else if(sections.length == 0){

		setLS(newTarea)

		getLSElements()

		document.getElementById('error-vacio').style.display = "none"

		for (var i = 0; i < elementosParseados.length; i++) {

			var nuevoElemento = document.createElement('section')

			nuevoElemento.innerHTML= elementosParseados[i].html

			main.appendChild(nuevoElemento)
		}
		agregarAEL()
		popupClose()
		resetValue()
	}else{
		removeAll()

		setLS(newTarea)

		getLSElements()


		document.getElementById('error-vacio').style.display = "none"

		for (var i = 0; i < elementosParseados.length; i++) {

			var nuevoElemento = document.createElement('section')

			nuevoElemento.innerHTML= elementosParseados[i].html

			main.appendChild(nuevoElemento)
		}
			agregarAEL()
			popupClose()
			resetValue()
	}

}
//BORRAR DE A UNO

// function removeOne(){

// }

//INICIA LOCALSTORAGE CON IDNUEVO = 1

if(localStorage.getItem(0)==null){
	localStorage.setItem(0,1)
}

//recolectar valores y crear objeto tarea(newTarea => en el creador de tarea en el DOM)

var idNuevo = localStorage.getItem(0)

function setValue (){
	var titulo = document.getElementById('titulo').value
	var descripcion = document.getElementById('descripcion').value

	var htmlNuevo = `<div class='nuevaTarea' id="id${idNuevo}">
		<div>
			<div>
				<span class="ion-android-checkbox-outline-blank descompletado"></span>
				<span class="ion-android-done completado"  id="c${idNuevo}" name="hola"></span>
			</div>
			<h4>${titulo}</h4>
		</div>
		<p class="p-tarea">${descripcion}</p>
		<div class="listaOp">
			<span class="ion-trash-a eliminarElemento" id="eliminarElemento${idNuevo}"></span>
			<span class="ion-android-create editarElementos" id="editarElementos${idNuevo}"></span>
		</div>
	</div>`

	var objTarea = new Tarea(idNuevo , titulo , descripcion , htmlNuevo)

	idNuevo++
	setLSID(idNuevo)

	return objTarea
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
				elementosParseados[i].completado = true		
			}else{
				e.currentTarget.style.color ="#F0F66E"
				elementosParseados[i].completado = false
			}			
		}
	}
}

// DISPLAY OPCION BORRAR TODO

var opBorrarTodo = document.getElementsByClassName('borrarTodo')[0]

document.getElementById('borrarTodo').addEventListener('click' , opSi)

var estadoOpBT = true

function opSi(){
	if(estadoOpBT == true){
		opBorrarTodo.style.display="block"
		estadoOpBT = false
	}else{
		opBorrarTodo.style.display="none"
		estadoOpBT = true
	}

	return estadoOpBT
}

// FUNCION BORRAR TODOS PARA SOBRESCRIBIR

function removeAll(){

	for(var i = sections.length -1 ; i >= 0; i--){
		main.removeChild(sections[i])
	}
}
//BORRAR TODO DE FORMA PERMANENTE

 opBorrarTodo.addEventListener('click' , removeAllBtn)
 opBorrarTodo.addEventListener('click' , opSi)

function removeAllBtn(){

	for(var i = sections.length -1 ; i >= 0; i--){
		main.removeChild(sections[i])
	}

	localStorage.clear()
	localStorage.setItem(0 , 1)
}

//constructor objetos

function Tarea (id , titulo , descripcion , html){
	this.id = id
	this.titulo = titulo
	this.descripcion = descripcion
	this.html = html
	this.completado = false
	function remover (){
		localStorage.removeItem(this.id)
	}

}
//RESETEAR CAMPOS

function resetValue(){
	document.getElementById('titulo').value = ""
	document.getElementById('descripcion').value = ""
}
//popup

document.getElementById('popup-open').addEventListener('click', popupOpen)
document.getElementById('close-popup').addEventListener('click', popupClose)
document.getElementById('btn_nuevatarea').addEventListener('click', generarTarea)

function popupOpen (){
	document.getElementById('popup').style.display="flex"
}

function popupClose (){
	document.getElementById('popup').style.display="none"
	document.getElementById('error-vacio').style.display = "none"

}

