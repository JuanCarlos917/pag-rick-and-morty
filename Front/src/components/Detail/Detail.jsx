import styles from './Detail.module.css';
import { Link ,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



export default function Detail(props) {
	//console.log(useParams());
	const { detailId } = useParams();
	const [character, setCharacter] = useState({});

    const URL_BASE_SERVER = 'http://localhost:3001/rickandmorty/detail';
    // const URL_BASE = 'https://be-a-rym.up.railway.app/api';
	// const API_KEY = '1b88bdb6d72a.fbb4ede0d66b229d0d0b';

	useEffect(() => {
		fetch(`${URL_BASE_SERVER}${detailId}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			})
			.catch((err) => {
				window.alert('No hay personajes con ese ID');
			});
		return setCharacter({});
	}, [detailId]);


	return (
		<div>
			<div className={styles.containerDetail}>
				<div className={styles.childrenDetail}>
					<h1 className={styles.titleDetail}>Detail</h1>
					<h3>Name: {character.name}</h3>
                    <h3>Species: {character.species}</h3>
				{character.origin && <h3>Location: {character.origin.name}</h3>}
			<Link to='/home'>
				<button>Back</button>
			</Link>
				</div>
				<img src={character.image} alt={character.name} />
			</div>
		</div>
	);
}
