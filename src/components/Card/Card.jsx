import styles from './Card.module.css';
import { Link } from 'react-router-dom';


export default function Card({ name, species, gender, image, onClose, id }) {
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
			<Link to={`/detail/${id}`}>
				<section>
					<img src={image} className={styles.imgcard} alt={name} />
				</section>
			</Link>
		</div>
	);
}
