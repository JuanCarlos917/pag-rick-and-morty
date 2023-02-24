import styles from './SearchBar.module.css';

export default function SearchBar(props) {

console.log(props.onSearch);

	return (
		<div className={styles.searchBar}>
			<input
				type='search'
				placeholder=''
                id={'search'}
				className={styles.searchInput}
			/>
			<button onClick={props.onSearch}
            className={styles.searchButton}>
				Search
			</button>
		</div>
	);
}
