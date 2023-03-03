import {connect} from 'react-redux'
import Card from '../Card/Card'

export  function Favorites (props){
    const { myFavorites } = props;
    console.log("personajes", myFavorites);
    return (
		<div>
			<h1>My Favorites</h1>
			<div>
				{myFavorites.map((card, index) => (
					<Card
						style={{ flexbasis: '20%' }}
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

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
}

export default connect (mapStateToProps, null)(Favorites);