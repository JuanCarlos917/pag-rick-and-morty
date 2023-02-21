import styles from './Card.module.css';

export default function Card({ name, species, gender, image, onClose }) {
	return (
		<div className={styles.cardcontainer}>
			<button onClick={onClose} className={styles.buttoncard}>
				Close
			</button>
			<div className={styles.containersubtitulo}>
				<h2 className={styles.subtitulocard}>Nombre: {name}</h2>
				<h2 className={styles.subtitulocard}>Especie: {species}</h2>
				<h2 className={styles.subtitulocard}>Genero: {gender}</h2>
			</div>
			<section>
				<img
					src={image}
					className={styles.imgcard}
					alt='imagen de Rick'
				/>
			</section>
		</div>
	);
}
