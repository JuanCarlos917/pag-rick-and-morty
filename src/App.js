import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

// import { Route, Routes } from 'react-router-dom';

function App() {
	const [characters, setCharacters] = useState([]);
	const example = {
		name: 'Morty Smith',
		species: 'Human',
		gender: 'Male',
		image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
	};
	const onSearch = (data) => {
		setCharacters(...characters, example);
	};
	return (
		<div className='App'>
			{/* <Routes> */}
			{/* <Route path='/' elment={<Header />} /> */}
			<div>
				<Header onSearch={onSearch} />
			</div>
			<Cards characters={characters} />
			<div>
				<Footer />
				{/* <Route path='/footer' elment={<Footer />} /> */}
			</div>
			{/* </Routes> */}
		</div>
	);
}

export default App;
