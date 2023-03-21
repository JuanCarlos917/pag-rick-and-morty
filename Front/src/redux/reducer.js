const {
	ADD_FAVORITE,
	REMOVE_FAVORITE,
	FILTER,
	ORDER,
	ALL_CHARACTERS,
	SET_ALL_CHARACTERS,
	CLEAR_FAVORITES,
} = require('./action-types');

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {
				...state,
				myFavorites: action.payload,
				allCharacters: action.payload,
			};
		case FILTER:
			const { allCharacters } = state;
			const fiterFavorites = allCharacters.filter(
				(character) => character.gender === action.payload,
			);
			return {
				...state,
				myFavorites: fiterFavorites,
			};
		case REMOVE_FAVORITE:
			return {
				...state,
				myFavorites: action.payload,
			};
		case ORDER:
			const { allCharacters: charactersToOrder } = state;
			const sortedFavorites = charactersToOrder.sort((a, b) =>
				action.payload === 'Ascendente' ? a.id - b.id : b.id - a.id,
			);
			return {
				...state,
				myFavorites: sortedFavorites,
			};
        case ALL_CHARACTERS:
            return {
                ...state,
                myFavorites: state.allCharacters,
            }
        case SET_ALL_CHARACTERS:
            return {
				...state,
				myFavorites: state.allCharacters,
			};
        case CLEAR_FAVORITES:
            return initialState;
		default:
			return { ...state };
	}
};
export default reducer;
