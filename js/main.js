var imagenes * ['media/f1.jpg','media/f2.jpg', 'media/f3.jpg', 'media/f4.jpg' ],
	cont =0;

function carrousel(contenedor) {
	contenedor.addEventListener('click', e =>{
		let atras = contenedor.querySelector('.atras'),
			adelante = contenedor.querySelector('.adelante'),
			media = contenedor.querySelector('media'),
			tgt = e.target;

		if (tgt == atras) {
			if (cont > 0) {
				media.src = imagenes[cont - 1];
				cont--;

			}else{
				media.src =imagenes[imagenes.length - 1];
				cont = imagenes.length - 1;
			}

		}else if (tgt == adelante) {
			if (cont > imagenes.length - 1) {
				media.src = imagenes[cont + 1];
				cont++;

			}else{
				media.src =imagenes[0];
				cont = 0;
			}
		}

	});
}


document.addEventListener("DOMContentLoaded", () =>{
	let contenedor = document.querySelector('.contenedor');
	carrousel(contenedor);

});
