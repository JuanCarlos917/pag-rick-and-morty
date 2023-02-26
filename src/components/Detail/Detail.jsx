//import styles from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

//falta importar  Link

export default function Detail(props) {
	//console.log(useParams());
	const { detailId } = useParams();
	const [character, setCharacter] = useState({});

    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
	const API_KEY = '1b88bdb6d72a.fbb4ede0d66b229d0d0b';

	useEffect(() => {
		fetch(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
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
			<button>Back</button>

			{/* <Link to='/home'>
				<button>Back</button>
			</Link> */}
			<h1>Detail</h1>
			<h2>{character.name}</h2>
			<img src={character.image} alt={character.name} />
			{character.origin && <h3>{character.origin.name}</h3>}
		</div>
	);
}
