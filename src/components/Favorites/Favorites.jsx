import {useDispatch, useSelector} from 'react-redux'
import Card from '../Card/Card'
import { filterCards, orderCards, setAllCharacters } from '../../redux/actions';
import { Link } from 'react-router-dom';

export default function Favorites (){
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites);


    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e) => {
		const value = e.target.value;
		if (value === 'Todos') {
			dispatch(setAllCharacters());
		} else {
			dispatch(filterCards(value));
		}
	};


    return (
		<div>
			<h1>My Favorites</h1>
			<div>
            <div>
            <Link to='/home'>
                <button>Back to home</button>
            </Link>
            </div>
            <button onClick={() => dispatch({type:'CLEAR_FAVORITES'})} >Remove all</button>
				<select name='order' id='' onChange={handleOrder}>
					<option value='Ascendente'>Ascendente</option>
					<option value='Descendente'>Descendente</option>
				</select>
				<select name='filter' id='' onChange={handleFilter}>
                    <option value="Todos">Todos</option>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Genderless'>Genderless</option>
					<option value='unknown'>unknown</option>
				</select>
			</div>
			<div>
				{favorites.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						name={card.name}
						species={card.species}
						gender={card.gender}
						image={card.image}
					/>
				))}
			</div>
		</div>
	);
}
