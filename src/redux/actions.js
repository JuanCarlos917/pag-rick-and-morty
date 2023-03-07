import {
	ADD_FAVORITE,
	REMOVE_FAVORITE,
	FILTER,
	ORDER,
	SET_ALL_CHARACTERS,
} from './action-types';



export const addFavorite = (data) => ({
	type: ADD_FAVORITE,
	payload: data
});


export const removeFavorite = (id) => ({
	type: REMOVE_FAVORITE,
	payload: id,
});

export const filterCards = (gender) => ({
	type: FILTER,
	payload: gender === 'Todos' ? null: gender,
});

export const orderCards = (id) => ({
    type: ORDER,
    payload: id,
});

export const setAllCharacters = () => ({
	type: SET_ALL_CHARACTERS,
});