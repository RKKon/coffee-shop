import { useState } from "react";

import "./randomCoffee.sass";
import "../../assets/sass/style.sass";

import imgNotFound from "../../assets/img/img_not_found.jpg";

const RandomCoffee = ({ allItems, addToCart, closeItemMessage }) => {
  const amountCoffee = allItems.length - 1;
  let index = +(Math.random() * amountCoffee).toFixed();
  const [coffeeItem, setCoffeeItem] = useState(allItems[index]);

  const replaceImage = (error) => (error.target.src = imgNotFound);

  const getRandomCoffee = () => {
    index = +(Math.random() * amountCoffee).toFixed();
    setCoffeeItem(allItems ? allItems[index] : null);
  };

  return (
    <section style={{ margin: "50px", fontSize: "26px" }}>
      <div className="random_coffee">
        <h2 className="random_coffee_title">Are you tired of the same coffee? Try new one!</h2>
        <div className="random_coffee_card">
          <img
            className="random_coffee_card_img"
            alt={coffeeItem?.title ?? "name unknown"}
            src={coffeeItem?.image ?? imgNotFound}
            onError={replaceImage}
          />
          <div className="random_coffee_card_flex_div">
            <h3 className="coffee_name">{coffeeItem?.title ?? "name unknown"}</h3>
            <p className="random_coffee_ingredients">
              Ingredients:
              <span> {coffeeItem?.ingredients ?? "ingredients unknown"}</span>
            </p>
            <p className="random_coffee_price">{coffeeItem?.price ?? ""}</p>
            <button tabIndex={6}
              onClick={() => {
                closeItemMessage();
                addToCart(coffeeItem?.id ?? null);
              }}
              className="random_coffee_card_btn"
            >
              Try now
            </button>
          </div>
        </div>
        <button tabIndex={7} onClick={getRandomCoffee} className="random_coffee_btn">
          Try new coffee
        </button>
      </div>
    </section>
  );
};

export default RandomCoffee;
