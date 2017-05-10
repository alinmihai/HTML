function Aciertos(idParrafo, idImagen)
	{
		var p1,
			p2,
			imagen,
			numeroAciertos;

	p1 = document.getElementById(idParrafo);
	p1.style.color = "green";
	imagen = document.getElementById(idImagen);
	imagen.src = "../Imagenes/acierto.png";
	p2 = document.getElementById('idAciertos');
	/*
	numeroAciertos = parseInt(p2.innerHTML);
	numeroAciertos = numeroAciertos + 1;
	p2.innerHTML = numeroAciertos;
	*/

	/* Las 3 líneas anteriores son iguales que la línea de abajo optimizada */

	p2.innerHTML = parseInt(p2.innerHTML) + 1;
}

function Errores(idParrafo, idImagen)
	{
		var p1,
	    	p2,
	    	imagen,
	    	numeroErrores;

	p1 = document.getElementById(idParrafo);
	p1.style.color = "red";
	imagen = document.getElementById(idImagen);
	imagen.src = "../Imagenes/error.png";	
	p2 = document.getElementById('idFallos');
	/*
	numeroErrores = parseInt(p2.innerHTML);
	numeroErrores = numeroErrores + 1;
	p2.innerHTML = numeroErrores;
	*/
	
	/* Las 3 líneas anteriores son iguales que la línea de abajo optimizada */

	p2.innerHTML = parseInt(p2.innerHTML) + 1;
}