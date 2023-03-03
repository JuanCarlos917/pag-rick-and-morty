import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import * as actions from '../../redux/actions';

function Card(props) {
	const [isFav, setIsFav] = useState(false);
    console.log("props",props);
	const { myFavorites } = props;

	const handleFavorite = () => {
		setIsFav(!isFav);
		if (!isFav) {
			props.addFavorite(props);
		} else {
			props.removeFavorite(props.id);
		}
	};

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);


	// useEffect(() => {
	// 	for (let i = 0; i < myFavorites.length; i++) {
	// 		if (myFavorites[i].id === props.id) {
	// 			setIsFav(true);
	// 			break;
	// 		}
	// 	}
	// }, [myFavorites]);

	return (
		<div className={styles.cardcontainer}>
			<button onClick={props.onClose} className={styles.buttoncard}>
				Close
			</button>
			{isFav ? (
				<button onClick={handleFavorite}>❤️</button>
			) : (
				<button onClick={handleFavorite}>🤍</button>
			)}
			<div className={styles.containersubtitulo}>
				<h2 className={styles.subtitulocard}>{props.name}</h2>
				<p className={styles.subtitulocard}>Specie: {props.species}</p>
				<p className={styles.subtitulocard}>Gender: {props.gender}</p>
				<p className={styles.subtitulocard}>Origin: {props.origin}</p>
			</div>
			<Link to={`/detail/${props.id} `}>
				<section>
					<img
						src={props.image}
						className={styles.imgcard}
						alt={props.name}
					/>
				</section>
			</Link>
		</div>
	);
}

export const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		addFavorite: (data) => dispatch(actions.addFavorite(data)),
		removeFavorite: (id) => dispatch(actions.removeFavorite(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
