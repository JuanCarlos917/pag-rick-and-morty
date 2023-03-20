const axios = require('axios');
const URL_BASE = 'https://be-a-rym.up.railway.app/api';
const API_KEY = '1b88bdb6d72a.fbb4ede0d66b229d0d0b';


function getCharById(req, res) {
    const { id } = req.params;

	axios
		.get(`${URL_BASE}/character/${id}?key=${API_KEY}`)
		.then((response) => response.data)
        .then((data) => {
            const character = {
                id: data.id,
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species,
            }
            res.status(200).json(character);
        })
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
}

module.exports = { getCharById };
