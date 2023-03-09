const http = require('http');
const characters = require('./utils/data');
const PORT = 3001;

http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');

	if (req.url.includes('rickandmorty/character')) {
		const id = req.url.split('/').pop();
		const characterFilter = characters.filter(
			(char) => char.id === Number(id),
		);
		res.writeHead(200, { 'Content-type': 'application-json'}).end(
			JSON.stringify(characterFilter[0]),
		);
	}
}).listen(PORT, 'localhost')
