import { useState } from 'react';

import './randomCoffee.sass'
import '../../assets/sass/style.sass';

import imgNotFound from '../../assets/img/img_not_found.jpg';

const RandomCoffee = ({allItems, addToCart}) => {
  let index = +((Math.random() * 24).toFixed()) + 1;
  const [coffeeItem, setCoffeeItem] = useState(allItems[index])
  
	const replaceImage = (error) => error.target.src = imgNotFound
  const getRandomCoffee = () => {
    index = +((Math.random() * 24).toFixed()) + 1
    setCoffeeItem(allItems ? allItems[index] : null)
  }

  useState(() => setCoffeeItem(allItems ? allItems[index] : null),[])
  
  return (
    <section style={{'margin': '50px', 'fontSize': '26px'}}>
      <div className='random_coffee'>
        <h2 className='random_coffee_title'>Tired from usual coffee? Try new one!</h2>
        <div className="random_coffee_card">
          <img className="random_coffee_card_img" onError={replaceImage} src={coffeeItem.image ? coffeeItem.image : imgNotFound} alt={coffeeItem.title ? coffeeItem.title : null}/>
          <div className='random_coffee_card_flex_div'>
            <h3 className="coffee_name">{coffeeItem.title ? coffeeItem.title : null}</h3>
            <p className="random_coffee_ingredients">Ingredients:<span> {coffeeItem.ingredients ? coffeeItem.ingredients.join(', ') : null}</span></p>
            <p className="random_coffee_price">{coffeeItem.price ? coffeeItem.price : null}</p>
            <button onClick={() => addToCart(coffeeItem.id ? coffeeItem.id : null)}	className='random_coffee_card_btn'>Try now</button>
          </div>
        </div>
        <button onClick={getRandomCoffee} className='random_coffee_btn'>Try new coffee</button>
      </div>
    </section>
  )
}

export default RandomCoffee