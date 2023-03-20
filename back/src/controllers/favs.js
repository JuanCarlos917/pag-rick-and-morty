const favs = require('../utils/favs');

function postFav(req, res) {
	favs.push(req.body);
	res.status(200).json(favs);
}

function getFavs(req, res) {
	res.status(200).json(favs);
}

function deleteFavs(req, res) {
	const { id } = req.params;
    if(!id){
        res.status(400).json({error: 'id is required'});
    }else{
        if(!favs.some((pub)=> Number(pub.id) === Number(id))){
            res.status(404).json({error: 'id not found'});
        }
    }
	favs = favs.filter(char => char.id !== Number(id));
    res.status(200).json(favs);
}

module.exports = {
	postFav,
	getFavs,
    deleteFavs,
};
