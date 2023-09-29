import { Link } from "react-router-dom";
import imgNotFound from "../../assets/img/img_not_found.jpg";

import "../../assets/sass/style.sass";
import "../searchAndFilterPanel/searchPanel.sass";

const ViewCoffeeItems = ({ filteredCoffeeItem, addToCart, closeItemMessage }) => {
  const replaceImage = (error) => (error.target.src = imgNotFound);
  return (
    <>
      {filteredCoffeeItem.map((coffeeItem) => {
        return (
          <li key={coffeeItem?.id ?? null} className="search_flex_item">
            <Link to={`/coffee-shop/ourCoffee/${coffeeItem?.id ?? null}`}>
              <img
                className="search_item_img"
                src={coffeeItem?.image ?? imgNotFound}
                alt={coffeeItem?.title ?? "name unknown"}
                onError={replaceImage}
              />
              <h3 className="coffee_name">{coffeeItem?.title ?? "name unknown"}</h3>
            </Link>
            <p className="coffee_country">
              Ingredients:<span> {coffeeItem?.ingredients ?? ""}</span>
            </p>
            <div className="coffee_item_on_bottom">
              <p className="coffee_price">{coffeeItem?.price ?? ""}</p>
              <button
                onClick={() => {
                  addToCart(coffeeItem?.id ?? null);
                  closeItemMessage();
                }}
                className="buy_btn"
              >
                Buy now
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ViewCoffeeItems;
