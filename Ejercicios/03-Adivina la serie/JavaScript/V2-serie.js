function Error()
	{		
		var p,
			imagen;
		p = document.getElementById('parrafo2');
		p.style.color = "Red";
		p = document.getElementById('Resultado');
		p.innerHTML += "0";
		imagen = document.getElementById('imagen1');
		imagen.src = "../Imagenes/error.png";
	}
	function Acierto()
	{		
		var p,
			imagen;
		p = document.getElementById('parrafo3');
		p.style.color = "Green";
		p = document.getElementById('Resultado');
		p.innerHTML += "1";
		imagen = document.getElementById('imagen1');
		imagen.src = "../Imagenes/acierto.png";
	}
		function Error2()
	{		
		var p,
			imagen;
		p = document.getElementById('parrafo5');
		p.style.color = "Red";
		p = document.getElementById('Resultado');
		p.innerHTML += "0";
		imagen = document.getElementById('imagen2');
		imagen.src = "../Imagenes/error.png";
	}
	function Acierto2()
	{		
		var p,
			imagen;
		p = document.getElementById('parrafo4');
		p.style.color = "Green";
		p = document.getElementById('Resultado');
		p.innerHTML += "1";	
		imagen = document.getElementById('imagen2');
		imagen.src = "../Imagenes/acierto.png";
	}