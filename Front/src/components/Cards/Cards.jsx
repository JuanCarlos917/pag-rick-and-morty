import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
	const { characters } = props;

	return (
		<div>
			<div className={styles.containercard}>
				<h3 className={styles.cardlength}>
					personajes cargados: {characters.length}
				</h3>
			</div>
			{characters.length &&
				characters.map((character) => {
					return (
						<Card
							id={character.id}
							key={character.id}
							name={character.name}
							species={character.species}
							gender={character.gender}
							image={character.image}
							onClose={() => props.onClose(character.id)}
						/>
					);
				})}
		</div>
	);
}
