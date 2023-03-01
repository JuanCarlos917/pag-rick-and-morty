import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
	const [character, setCharcter] = useState('');


    const random = () =>{
        const randomCharacter = Math.floor(Math.random() * 826)
        setCharcter(randomCharacter);
        return randomCharacter
    }

	return (
		<div className={styles.searchBar}>
			<button
				className={styles.searchButton}
				// onClick={() => clearAll('')}
			>
				Clear
			</button>
			<button
				className={styles.searchButton}
				onClick={() => onSearch(random())}>
				Random
			</button>
			<input
				type='search'
				placeholder=''
				id='search'
				onChange={(e) => setCharcter(e.target.value)}
				className={styles.searchInput}
			/>{' '}
			<button
				onClick={() => onSearch(character)}
				className={styles.searchButton}>
				Search
			</button>
		</div>
	);
}
