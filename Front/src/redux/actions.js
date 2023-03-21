import {
	ADD_FAVORITE,
	REMOVE_FAVORITE,
	FILTER,
	ORDER,
	SET_ALL_CHARACTERS,
	CLEAR_FAVORITES,
} from './action-types';
import axios from 'axios';

export const addFavorite = (favorites) => {
	return function (dispatch) {
		axios
			.post('http://localhost:3001/rickandmorty/favs', favorites)
			.then((res) => {
				return dispatch({
					type: ADD_FAVORITE,
					payload: res.data,
				});
			});
	};
};

export const removeFavorite = (id) => {
    return function(dispatch){
        axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`)
        .then(res => {
            return dispatch({
                type: REMOVE_FAVORITE,
                payload: id
            })
        })
    }
}

export const filterCards = (gender) => ({
	type: FILTER,
	payload: gender === 'Todos' ? null : gender,
});

export const orderCards = (id) => ({
	type: ORDER,
	payload: id,
});

export const setAllCharacters = () => ({
	type: SET_ALL_CHARACTERS,
});

export const clearFavorites = () => ({
	type: CLEAR_FAVORITES,
});
