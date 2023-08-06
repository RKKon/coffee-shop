import { useState } from "react";

import "../../assets/sass/style.sass";
import "./searchPanel.sass";

import ViewCoffeeItems from "../viewCoffeeItems/ViewCoffeeItems";
import NotFoundCoffee from "../notFoundCoffee/NotFoundCoffee";
import Spinner from "../spinner/Spinner";

const SearchAndFilterPanel = (props) => {
  const {
    coffeeItem,
    coffeeInServer,
    allItems,
    filter,
    changeCoffeeFilter,
    loading,
    addToCart,
    closeItemMessage,
  } = props;

  const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState(basicFilter ? basicFilter : null);

  // const createCoffeeFilter = () => {
  //   // updateCoffeeDataFromAPI();
  //   if (filter && filter.length) {
  //     return;
  //   } else {
  //     if (coffeeInServer && coffeeItem) {
  //       let arr = [];
  //       coffeeInServer.map((coffee) => (arr.length < 9 ? arr.push(coffee) : null));
  //       setFilter(arr);
  //     }
  //   }
  // };

  const addActiveStyleFilter = (idOrClassName = "#all") => {
    let allInputs = document.getElementsByClassName("filter_style");
    Array.from(allInputs).forEach((item) => item.classList.remove("filter_active"));
    document.querySelector(idOrClassName).classList.add("filter_active");
  };

  const displayBtnShowAllCoffee = (display = "none") => {
    document.querySelector(".btn_see_all_coffee").style.display = display;
  };

  const mainFilter = (myFilter) => {
    if (myFilter === "allItems") {
      changeCoffeeFilter(allItems);
      addActiveStyleFilter("#all");
      displayBtnShowAllCoffee("none");
    } else if (myFilter === "drinkCoffee") {
      changeCoffeeFilter(coffeeInServer);
      addActiveStyleFilter("#brazil");
      displayBtnShowAllCoffee("block");
    } else if (myFilter === "coffeeBeans") {
      changeCoffeeFilter(coffeeItem);
      addActiveStyleFilter("#columbia");
      displayBtnShowAllCoffee("block");
    } else console.log("Happened an error");
  };

  const searchFilter = (e) => {
    let letters = e.target.value.toLowerCase();
    setSearch(letters);
    changeCoffeeFilter(
      allItems.filter((coffee) => coffee.title.toLowerCase().indexOf(letters) > -1),
    );
  };

  return (
    <section className="search_and_filter_panel">
      <div className="search_menu_flex">
        <div>
          <label htmlFor="searchCoffee">Looking for</label>
          <input
            onChange={searchFilter}
            value={search}
            id="searchCoffee"
            name="searchCoffee"
            type="text"
            placeholder="start typing here..."
          />
        </div>
        <div>
          <label className="filter_mr" htmlFor="filerCoffee">
            Or filter
          </label>
          <input
            onClick={() => mainFilter("allItems")}
            className="filter_style"
            type="button"
            value="All Coffee"
            id="all"
            name="allCoffee"
          />
          <input
            onClick={() => mainFilter("drinkCoffee")}
            className="filter_style"
            type="button"
            value="Drink coffee"
            id="brazil"
            name="brazil"
          />
          {/* <input onClick={() => mainFilter('Kenya')} className="filter_style" type="button" value="coffee beans" id="kenya" name="kenya"/> */}
          <input
            onClick={() => mainFilter("coffeeBeans")}
            className="filter_style"
            type="button"
            value="Coffee beans"
            id="columbia"
            name="columbia"
          />
        </div>
      </div>

      <ul className="search_flex">
        {loading ? (
          <Spinner selectorId="preloader_for_items" />
        ) : !filter ? (
          <NotFoundCoffee visibleLink={false} />
        ) : (
          <ViewCoffeeItems
            filteredCoffeeItem={filter}
            addToCart={addToCart}
            closeItemMessage={closeItemMessage}
          />
        )}
      </ul>

      <button
        onClick={() => {
          displayBtnShowAllCoffee("none");
          mainFilter("allItems");
        }}
        className="btn_see_all_coffee"
      >
        See all coffee
      </button>
    </section>
  );
};

export default SearchAndFilterPanel;
