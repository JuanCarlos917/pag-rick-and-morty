import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

// import { Route, Routes } from 'react-router-dom';

function App() {
    const [characters, setCharacters] = useState([]);

    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const API_KEY = "1b88bdb6d72a.fbb4ede0d66b229d0d0b"

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

    const onClose = (id) =>{
        setCharacters(characters.filter((char)=> char.id !== id))
    }

	return (
		<div className='App'>
			{/* <Routes> */}
			{/* <Route path='/' elment={<Header />} /> */}
			<div>
				<Header onSearch={onSearch} />
			</div>
			<Cards characters={characters} onClose={onClose} />
			<div>
				<Footer />
				{/* <Route path='/footer' elment={<Footer />} /> */}
			</div>
			{/* </Routes> */}
		</div>
	);
}

export default App;
