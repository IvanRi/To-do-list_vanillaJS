//FUNCION DE EDICION

document.getElementById('close-popupEdit').addEventListener('click', popupEditClose)
document.getElementById('btn_nuevatareaEdit').addEventListener('click', editarTarea)

function popupEditClose(){
	document.getElementById('edicion').style.display="none"
	document.getElementById('error-vacioEdit').style.display = "none"
	
}

var aStringE

function editEl(e){
	document.getElementById('edicion').style.display ="flex"
	var completadoId = e.currentTarget.id
	aStringE = Number(completadoId.substring(2))
	for (var i = 0; i < elementosParseados.length; i++) {
		if(elementosParseados[i].id == aStringE){
			document.getElementById('tituloEdit').value = elementosParseados[i].titulo
			document.getElementById('descripcionEdit').value = elementosParseados[i].descripcion			
		}
	}
	return aStringE
}
function setNewValue (){
	var titulo = document.getElementById('tituloEdit').value
	var descripcion = document.getElementById('descripcionEdit').value

	var htmlNuevo = 
	`<div class='nuevaTarea' id="id${aStringE}">
		<div>
			<div>
				<span class="ion-android-checkbox-outline-blank descompletado"></span>
				<span class="ion-android-done completado" id="c${aStringE}"></span>
			</div>
			<h4 id="titulo${aStringE}">${titulo}</h4>
		</div>
		<p class="p-tarea">${descripcion}</p>
		<div class="listaOp">
			<span class="ion-trash-a eliminarElemento" id="el${aStringE}"></span>
			<span class="ion-android-create editarElementos" id="ed${aStringE}"></span>
		</div>
	</div>`

	var objTarea = new Tarea(aStringE , titulo , descripcion , htmlNuevo)

	return objTarea
}

function editarTarea (){
	var newTarea = setNewValue()

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
