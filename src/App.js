import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Footer from './components/Footer/Footer.jsx';
import Form from './components/Form/Form';
import NotFound from './components/NotFound/NotFound';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


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

        const { pathname } = useLocation();
		const navigate = useNavigate();
		const [access, setAcces] = useState(false);

		const userName = 'prueba@gmail.com';
		const password = '1234';

		function login(userData) {
			if (userData.password === password && userData.userName === userName) {
				setAcces(true);
                setCharacters([]);
				navigate('/home');
			} else {
                window.alert('Usuario o contraseña incorrectos');
			}
		}
		useEffect(() => {
			!access && navigate('/');
		}, [access]);

        console.log('acces', access);
		console.log('Uselocation ', pathname);

	return (
		<div className='App'>
			{pathname.length>1 && <Header onSearch={onSearch} />}

			<Routes>
				<Route path='/' element={<Form login={login}/>} />
				<Route
					path='/home'
					element={
						<Cards characters={characters} onClose={onClose} />
					}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/detail/:detailId' element={<Detail />} />
                <Route path="*" element={<NotFound/>} />
			</Routes>

			{pathname.length> 1 && <Footer />}
		</div>
	);
}

export default App;
