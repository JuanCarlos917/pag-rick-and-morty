const express = require('express');
const { Route } = express;
const router = Route();
const favs = require('./utils/favs');
const { getCharById, getCharDetail } = require('../controllers');

router.get('/onsearch/:id', getCharById);

router.get('/detail/:id', getCharDetail);

router.post('/rickandmorty/fav', (req, res) => {
	const { id, name, species, image, gender } = req.body;
	favs.push({ id, name, species, image, gender });
	res.status(200).json({ message: 'Added to favs' });
});

router.get('/rickandmorty/fav', (req, res) => {
	res.status(200).json(favs);
});

router.delete('/rickandmorty/fav/:id', (req, res)=> {
    const { id } = req.params;
    const index = favs.findIndex((fav) => fav.id === id);

    if(index !== -1 ){
        favs.splice(index, 1)
        res.status(200).json({
			message: `the character with the favs ${id} was removed`,
		});
    }else{
        res.status(404).json({
			message: `Character with ID ${id} not found.`,
		});
    }
});

module.exports = router;
