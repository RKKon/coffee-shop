import { useState, useEffect } from "react";

// import { CoffeeAPI } from "../pages/Server";
import { FetchJson, FetchCoffeeBeans } from "../server/Server";
import SearchAndFilterPanel from "../searchAndFilterPanel/SearchAndFilterPanel";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import NotFoundCoffee from "../notFoundCoffee/NotFoundCoffee";
import Cart from "../cart/Cart";
import Spinner from "../spinner/Spinner";
import RandomCoffee from "../randomCoffee/RandomCoffee";
import AddItemMessage from "./../addItemMessage/AddItemMessage";

import "../../assets/sass/style.sass";
import "../searchAndFilterPanel/searchPanel.sass";

const MainPageContent = () => {
  const [coffeeItem, setCoffeeItem] = useState(null);
  const [coffeeInServer, setCoffeeInServer] = useState(null);
  const [allItems, setAllItems] = useState(null);
  const [filter, setFilter] = useState(null);
  const [storedCart, setStoredCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [cart, setCart] = useState(storedCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showAddItemMsg, setShowAddItemMsg] = useState(false);

  //const coffeePrices = ['1.29$', "2.30$", '3.10$', '1.99$', '2.00$','1.69$', '3.10$', '4.99$', '2.49$', '1.99$', '2.20$', '2.99$', '3.99$', '2.59$', '2.99$', '3.49$', '2.10$', '1.49$', '2.30$', '4.29$'];

  const getCoffeeItems = async () => {
    //await CoffeeAPI(setCoffeeItem, setLoading);
    FetchJson(setCoffeeInServer, setLoading);
    FetchCoffeeBeans(setCoffeeItem, setLoading);
  };

  const updateCoffeeDataFromAPI = async () => {
    if (coffeeItem && coffeeInServer) {
      setAllItems(coffeeInServer.concat(coffeeItem));
      let arr = [];
      coffeeInServer.map((coffee) => (arr.length < 9 ? arr.push(coffee) : null));
      setFilter(arr);
    }
  };

  const createCoffeeFilter = async () => {
    if (filter && filter.length) {
      return;
    } else {
      if (coffeeInServer) {
        let arr = [];
        coffeeInServer.map((coffee) => (arr.length < 9 ? arr.push(coffee) : null));
        setFilter(arr);
      }
    }
  };

  // Cart functions
  const toggleCart = () =>
    document.querySelector(".cart_list").classList.toggle("cart_items_display_none");

  const addToCart = function (id) {
    let filteredCoffee = allItems.filter((coffee) => coffee.id === id);
    if (cart.length) {
      let checked = 0;
      // eslint-disable-next-line array-callback-return
      cart.map((cart) => {
        if (cart.id === filteredCoffee[0].id) {
          onCartIncrCoffee(id);
          checked = 1;
        }
      });
      if (!checked) {
        return setCart((prevState) => [...prevState, filteredCoffee[0]]);
      }
    } else return setCart((prevState) => [...prevState, filteredCoffee[0]]);
  };

  const onDeleteFromCart = (id) => {
    setCart(
      !cart
        ? null
        : cart.filter((coffee) => {
          return coffee.id !== id;
        }),
    );
  };

  const getTotalPrice = () => {
    if (cart) {
      let total = 0;
      for (let i = 0; cart.length > i; i++) {
        if (cart[i].price) {
          let itemPrice = +cart[i].price.slice(0, -1);
          total += itemPrice;
        }
      }
      setTotalPrice(total.toFixed(2));
    }
  };

  const onCartIncrCoffee = (id) => {
    return !cart
      ? null
      : setCart(
        cart.map((item) => {
          if (item.id === id) {
            let newPrice = "";
            // eslint-disable-next-line array-callback-return
            allItems.map((coffee) => {
              if (coffee.id === id) {
                newPrice =
                  (+item.price.slice(0, -1) + +coffee.price.slice(0, -1)).toFixed(2) + "$";
              }
            });
            return {
              ...item,
              quantity: item.quantity + 1,
              price: newPrice,
            };
          } else return item;
        }),
      );
  };

  const onCartDecrCoffee = (id) => {
    return !cart
      ? null
      : setCart(
        cart.map((item) => {
          if (item.id === id) {
            if (item.quantity !== 0) {
              let newPrice = "";
              // eslint-disable-next-line array-callback-return
              allItems.map((coffee) => {
                if (coffee.id === id) {
                  newPrice =
                    (+item.price.slice(0, -1) - +coffee.price.slice(0, -1)).toFixed(2) + "$";
                }
              });
              return {
                ...item,
                quantity: item.quantity - 1,
                price: newPrice,
              };
            } else return item;
          } else return item;
        }),
      );
  };

  const closeItemMessage = () => {
    setShowAddItemMsg(true);
    setTimeout(() => setShowAddItemMsg(false), 3000);
  };

  const changeCoffeeFilter = (coffeeFilter) => setFilter(coffeeFilter);

  useEffect(() => {
    getCoffeeItems();
  }, []);
  useEffect(() => {
    updateCoffeeDataFromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coffeeItem]);
  useEffect(() => {
    createCoffeeFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allItems]);
  useEffect(() => {
    getTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    setStoredCart(cart);
  }, [cart])

  return (
    <>
      <ErrorBoundary>
        {loading ? (
          <Spinner selectorId="preloader_for_items" />
        ) : !filter ? (
          <NotFoundCoffee visibleLink={false} />
        ) : (
          <RandomCoffee
            allItems={allItems}
            addToCart={addToCart}
            closeItemMessage={closeItemMessage}
          />
        )}
      </ErrorBoundary>
      <Cart
        cart={cart}
        toggleCart={toggleCart}
        onDeleteFromCart={onDeleteFromCart}
        totalPrice={totalPrice}
        onCartDecrCoffee={onCartDecrCoffee}
        onCartIncrCoffee={onCartIncrCoffee}
        setCart={setCart}
        setStoredCart={setStoredCart}
        setTotalPrice={setTotalPrice}
      />
      {showAddItemMsg ? <AddItemMessage cart={cart} /> : null}
      <ErrorBoundary>
        <SearchAndFilterPanel
          coffeeItem={coffeeItem}
          coffeeInServer={coffeeInServer}
          allItems={allItems}
          filter={filter}
          changeCoffeeFilter={changeCoffeeFilter}
          cart={cart}
          totalPrice={totalPrice}
          loading={loading}
          addToCart={addToCart}
          updateCoffeeDataFromAPI={updateCoffeeDataFromAPI}
          closeItemMessage={closeItemMessage}
        />
      </ErrorBoundary>
    </>
  );
};

export default MainPageContent;
