import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

import { FetchJson, FetchCoffeeBeans } from "../server/Server";
import Subheader from "../subheader/Subheader";
import NotFoundCoffee from "../notFoundCoffee/NotFoundCoffee";
import Spinner from "../spinner/Spinner";

import imgNotFound from "../../assets/img/img_not_found.jpg";

import "../../assets/sass/style.sass";
import "./coffeeItemPage.sass";

import coffeeBeans from "../../assets/icons/main_page_coffee_beans.png";

const CoffeeItemSinglePage = () => {
  const [coffeeInServer, setCoffeeInServer] = useState(null);
  const [coffeeItem, setCoffeeItem] = useState(null);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  // const coffeePrices = ['1.29$', "2.30$", '3.10$', '1.99$', '2.00$','1.69$', '3.10$', '4.99$', '2.49$', '1.99$', '2.20$', '2.99$', '3.99$', '2.59$', '2.99$', '3.49$', '2.10$', '1.49$', '2.30$', '4.29$'];

  const getCoffeeItems = async () => {
    // await CoffeeAPI(setCoffeeItem, setLoading);
    FetchJson(setCoffeeInServer, setLoading);
    FetchCoffeeBeans(setCoffeeItem, setLoading);
  };

  // const updateCoffeeDataFromAPI = () => {
  //   if (coffeeItem) {
  //     // eslint-disable-next-line array-callback-return
  //     coffeeItem.map((item, i) => {
  //       item.price = coffeePrices[i]
  //       item.quantity = 1
  //     })
  //   }
  // }

  let url = +document.location.pathname.replace(/\//g, "").replace(/\D/g, "");

  const getRightItem = () => {
    // updateCoffeeDataFromAPI();
    // let filteredOne = coffeeItem ? coffeeItem.filter((coffee) => coffee.id === url) : null;
    let allCoffeeItems;
    if (coffeeInServer && coffeeItem) {
      allCoffeeItems = coffeeInServer.concat(coffeeItem);
    }
    let filteredCoffee = allCoffeeItems
      ? allCoffeeItems.filter((coffee) => coffee.id === url)
      : null;

    if (filteredCoffee && filteredCoffee.length) {
      setFilter(filteredCoffee);
    }
    // else if (filteredOne && filteredOne.length) {
    //   setFilter(filteredOne);
    // }
  };

  const replaceImage = (error) => (error.target.src = imgNotFound);

  useEffect(() => {
    getCoffeeItems();
  }, []);

  useEffect(() => {
    getRightItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coffeeInServer, coffeeItem]);

  return (
    <>
      <Helmet>
        <meta name="description" content="App made by my own. I using here React." />
        <title>{filter?.[0]?.title ?? ""}</title>
      </Helmet>

      <Subheader subheaderBG={"subheader_our_coffee"} subheaderTitle="Our Coffee" />
      {loading ? (
        <Spinner selectorId="preloader_for_items" />
      ) : !filter ? (
        <NotFoundCoffee selector="coffee_not_found_center" />
      ) : (
        <section className="coffee_item_main">
          <a href="/coffee-shop"><button className="back_to_coffee_list">Back to coffee list</button></a>
          <div className="coffee_item_main_flex">
            <img
              className="coffee_page_item_img"
              src={filter?.[0]?.image ?? imgNotFound}
              onError={replaceImage}
              alt="our coffee"
            />

            <div className="about_our_beans_description">
              <h2 className="content_title">{filter?.[0]?.title ?? "name unknown"}</h2>
              <div className="flex_wrapper_beans">
                <div className="flex_beans coffee_item_mb25">
                  <div className="left_line"></div>
                  <img className="coffee_beans_img" src={coffeeBeans} alt="coffee beans" />
                  <div className="right_line"></div>
                </div>
              </div>
              <p className="bold_text item_mb">
                Ingredients:<span> {filter?.[0]?.ingredients ?? ""}</span>
              </p>
              <p className="item_mb">
                <span className="bold_text">Description:</span> {filter?.[0]?.description ?? ""}
              </p>
              <p className="bold_text">
                Price: <span className="item_big_price"> {filter?.[0]?.price ?? null}</span>
              </p>
              <button className="coffee_item_btn">Get coffee now</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CoffeeItemSinglePage;
