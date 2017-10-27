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

		checkCompletado(x)
	}
	agregarAELel()
	agregarAEL()
	extraerTitulos()

	return elementosParseados
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
		crearTarea()
	}else{
		removeAll()
		setLS(newTarea)
		getLSElements()
		crearTarea()
	}
}

function crearTarea (){
	document.getElementById('error-vacio').style.display = "none"

	for (var i = 0; i < elementosParseados.length; i++) {

		var nuevoElemento = document.createElement('section')

		nuevoElemento.innerHTML= elementosParseados[i].html

		main.appendChild(nuevoElemento)

		checkCompletado(i)
	}
	agregarAELel()
	agregarAEL()
	popupEditClose()
	popupClose()
	resetValue()
	extraerTitulos()
}


//recolectar valores y crear objeto tarea(newTarea => en el creador de tarea en el DOM)

var idNuevo = localStorage.getItem(0)

function setValue (){
	var titulo = document.getElementById('titulo').value
	var descripcion = document.getElementById('descripcion').value

	var htmlNuevo = 
	`<div class='nuevaTarea' id="id${idNuevo}">
		<div>
			<div>
				<span class="ion-android-checkbox-outline-blank descompletado"></span>
				<span class="ion-android-done completado" id="c${idNuevo}"></span>
			</div>
			<h4 id="titulo${idNuevo}">${titulo}</h4>
		</div>
		<p class="p-tarea">${descripcion}</p>
		<div class="listaOp">
			<span class="ion-trash-a eliminarElemento" id="el${idNuevo}"></span>
			<span class="ion-android-create editarElementos" id="ed${idNuevo}"></span>
		</div>
	</div>`

	var objTarea = new Tarea(idNuevo , titulo , descripcion , htmlNuevo)

	idNuevo++
	setLSID(idNuevo)

	return objTarea
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

