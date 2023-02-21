import styles from './SearchBar.module.css';

export default function SearchBar(props) {
	return (
		<div className={styles.searchBar}>
			<input
				type='search'
				placeholder=''
				className={styles.searchInput}
			/>
			<button
				onClick={() => props.onSearch('Rick')}
				className={styles.searchButton}>
				Buscar
			</button>
		</div>
	);
}
