
const initialState = {
	myFavorites: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_FAVORITE':
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
			};
		case 'REMOVE_FAVORITE':
            const filterList =state.myFavorites.filter(
					(item) => item.id !== action.payload,
				)
			return {
				...state,
				myFavorites: filterList,
			};
		default:
			return {...state}
	}
};
export default reducer;
