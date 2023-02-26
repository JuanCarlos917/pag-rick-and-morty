import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

function App() {
	const [characters, setCharacters] = useState([]);

	const URL_BASE = 'https://be-a-rym.up.railway.app/api';
	const API_KEY = '1b88bdb6d72a.fbb4ede0d66b229d0d0b';

	function onSearch(characters) {
		fetch(`${URL_BASE}/character/${characters}?key=${API_KEY}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
	}

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
	};

	return (
		<div className='App'>
			<Header onSearch={onSearch} />

			<Cards characters={characters} onClose={onClose} />
			<Detail />
			<About />
			{/* <Routes>
				<Route
					path='/'
					elment={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path='/detail/:detailId' element={<Detail />} />
				<Route path='/about' element={<About />} />
			</Routes> */}
			<Footer />
		</div>
	);
}

export default App;
