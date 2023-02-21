export default function SearchBar(props) {
	return (
		<div class='search-bar'>
			<input type='search' placeholder='' class='search-input' />
			<button onClick={() => props.onSearch('Rick')} class='search-button'>Buscar</button>
		</div>
	);
}
