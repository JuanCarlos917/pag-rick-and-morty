export default function Card({ name, species, gender, image, onClose }) {
	return (
		<div class='card-container'>
			<button onClick={onClose} class='button-card'>
				Close
			</button>
			<div class='container-subtitulo'>
				<h2 class='subtitulo-card'>Nombre: {name}</h2>
				<h2 class='subtitulo-card'>Especie: {species}</h2>
				<h2 class='subtitulo-card'>Genero: {gender}</h2>
			</div>
			<section>
				<img src={image} class='img-card' alt='imagen de Rick' />
			</section>
		</div>
	);
}
