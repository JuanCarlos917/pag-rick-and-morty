const axios = require('axios');
const URL_BASE = 'https://be-a-rym.up.railway.app/api';
const API_KEY = '1b88bdb6d72a.fbb4ede0d66b229d0d0b';

function getCharDetail(req, res) {
	const params = req.params;
	const id = params.id;
	const URL = `${URL_BASE}/character/${id}?key=${API_KEY}`;

	axios
		.get(URL)
		.then((response) => {
			const { id, name, species, image, gender, origin } = response.data;
			res.json({
				id,
				name,
				species,
				image,
				gender,
                origin,
			});
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
}

module.exports = getCharDetail;
