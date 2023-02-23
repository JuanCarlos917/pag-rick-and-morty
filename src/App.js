
import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';


function App() {
	return (
		<div className='App'>
			<Header title='' />
			<SearchBar onSearch={(characterID) => window.alert(characterID)} />
			<Card
				name={Rick.name}
				species={Rick.species}
				gender={Rick.gender}
				image={Rick.image}
				onClose={() => window.alert('Emulamos que se cierra la card')}
			/>
			<Cards characters={characters} />
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
