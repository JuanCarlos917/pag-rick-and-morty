const express = require('express');
const cors = require('cors');
const router = require('../src/routes/index');
const server = express();
const morgan = require('morgan');
const PORT = 3001;

const corsOptions = {
    origin: 'http://localhost:3000',
}
server.use(cors(corsOptions));

server.use(express.json());
server.use(morgan('dev'));

server.use('/rickandmorty', router);


server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
module.exports = { server };
