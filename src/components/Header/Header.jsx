import logo_rick_and_morty from '../assets/imgram/Rick_and_Morty.svg.png';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
// import { NavLink } from 'react-router-dom';

export default function Header(props) {
	return (
		<header className={styles.header}>
			<img
				className={styles.logorickandmorty}
				src={logo_rick_and_morty}
				alt={props.name}
			/>
			{/* <NavLink to='/home' className={styles.headerlogo}>
				<img
					className={styles.logorickandmorty}
					src={logo_rick_and_morty}
					alt={props.name}
				/>
			</NavLink> */}
			<button> home </button>

			{/* <NavLink to='/home'>
				<button> home </button>
			</NavLink> */}
			<button>About</button>

			{/* <NavLink to='/about'>
				<button>About</button>
			</NavLink> */}

			<SearchBar onSearch={props.onSearch} />
		</header>
	);
}
