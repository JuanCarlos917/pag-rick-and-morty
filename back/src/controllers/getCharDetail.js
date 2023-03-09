const axios = require('axios');

const getCharDetail = (res, id) => {
	//https://be-a-rym.up.railway.app/api/character/?key=1b88bdb6d72a.fbb4ede0d66b229d0d0b
	const URL_BASE = 'https://be-a-rym.up.railway.app/api';
	const API_KEY = '1b88bdb6d72a.fbb4ede0d66b229d0d0b';
	axios
		.get(`${URL_BASE}/character/${id}?key=${API_KEY}`)
		//.get(`${URL_BASE}/character/${id}?key=${API_KEY}`)
		.then((response) => response.data)
		.then((data) => {
			const character = {
				id: data.id,
				name: data.name,
				image: data.image,
				gender: data.gender,
				species: data.species,
				status: data.status,
				origin: data.origin?.name,
			};
			res.writeHead(200, { 'Content-Type': 'application/json' }).end(
				JSON.stringify(character),
			);
		})
		.catch((error) => {
			res.writeHead(500, { 'Content-Type': 'application/json' }).end(
				`Personaje con el id=${id} no se encontro`,
			);
		});
};

module.exports = getCharDetail

