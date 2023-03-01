import logo_rick_and_morty from '../assets/imgram/Rick_and_Morty.svg.png';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';


export default function Header(props) {
	return (
		<header className={styles.header}>
            <NavLink to='/home' >
			    <img
				    className={styles.logorickandmorty}
				    src={logo_rick_and_morty}
				    alt={props.name}
			    />
            </NavLink>
            <NavLink to='/home'>
			<p> home </p>
            </NavLink>
            <NavLink to='/about'>
                <p>About</p>
            </NavLink>
            <NavLink to='/'>
                <p>Logout</p>
            </NavLink>
			    <SearchBar onSearch={props.onSearch} />
		</header>
	);
}
