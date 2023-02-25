import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
	const [charcter, setCharcter] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		setCharcter(value);
	};


	return (
		<div className={styles.searchBar}>
			<input
				type='search'
				placeholder=''
				id='search'
				onChange={handleChange}
				className={styles.searchInput}
			/>
			<button
				onClick={() => props.onSearch(charcter)}
				className={styles.searchButton}>
				Search
			</button>
		</div>
	);
}
