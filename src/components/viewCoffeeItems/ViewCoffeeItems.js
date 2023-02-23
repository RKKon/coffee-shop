import { Link } from 'react-router-dom';
import imgNotFound from '../../assets/img/img_not_found.jpg';

import '../../assets/sass/style.sass';
import '../searchAndFilterPanel/searchPanel.sass';

const ViewCoffeeItems = ({filteredCoffeeItem, addToCart}) => {
	const replaceImage = (error) => error.target.src = imgNotFound
	return (
		<>
			{
				filteredCoffeeItem.map(coffeeItem => {
					return (
						<li key={coffeeItem.id ? coffeeItem.id : null} className="search_flex_item">
							<Link to={`/ourCoffee/${coffeeItem.id ? coffeeItem.id : null}`}>
								<img className="search_item_img" onError={replaceImage} src={coffeeItem.image ? coffeeItem.image : imgNotFound} 
								alt={coffeeItem.title ? coffeeItem.title : null}/>
								<h3 className="coffee_name">{coffeeItem.title ? coffeeItem.title : null}</h3>
								<p className="coffee_country">Ingredients:<span> {coffeeItem.ingredients ? coffeeItem.ingredients.join(', ') : null}</span></p>
								<p className="coffee_price">{coffeeItem.price ? coffeeItem.price : null}</p>
							</Link>
								<button onClick={() => addToCart(coffeeItem.id ? coffeeItem.id : null)} 
									className='buy_btn'>Buy now
								</button>
						</li>
					)
				})
			}
		</>
	)
};

export default ViewCoffeeItems