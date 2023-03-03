import { ADD_FAVORITE, REMOVE_FAVORITE } from './action-types';



export const addFavorite = (data) => ({
	type: ADD_FAVORITE,
	payload: data
});


export const removeFavorite = (id) => ({
	type: REMOVE_FAVORITE,
	payload: id,
});
//pedido a la api
