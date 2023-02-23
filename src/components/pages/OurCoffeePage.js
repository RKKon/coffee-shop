import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { FetchJson, CoffeeAPI } from '../pages/Server';

import Subheader from '../subheader/Subheader';
import OurCoffee from '../ourCoffee/OurCoffee';
import SearchAndFilterPanel from '../searchAndFilterPanel/SearchAndFilterPanel';

import NotFoundCoffee from '../notFoundCoffee/NotFoundCoffee';
import Cart from '../cart/Cart';
import Spinner from '../spinner/Spinner';
import RandomCoffee from '../randomCoffee/RandomCoffee';

import '../../assets/sass/style.sass';
import '../searchAndFilterPanel/searchPanel.sass';


const OurCoffeePage = () => {
  const [coffeeItem, setCoffeeItem] = useState(null);
	const [coffeeInServer, setCoffeeInServer] = useState(null);
	const [allItems, setAllItems] = useState(null);
	const [filter, setFilter] = useState(null);
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [loading, setLoading] = useState(true);
	
	const coffeePrices = ['1.29$', "2.30$", '3.10$', '1.99$', '2.00$','1.69$', '3.10$', '4.99$', '2.49$', '1.99$', '2.20$', '2.99$', '3.99$', '2.59$', '2.99$', '3.49$', '2.10$', '1.49$', '2.30$', '4.29$'];
  
	const getCoffeeItems = async () => {
		await CoffeeAPI(setCoffeeItem, setLoading);
		FetchJson(setCoffeeInServer);
	}
  
	const updateCoffeeDataFromAPI = () => {
		if (coffeeItem) {
			// eslint-disable-next-line array-callback-return
			coffeeItem.map((item, i) => {
				item.price = coffeePrices[i]
				item.quantity = 1
			})
			setAllItems(coffeeItem.concat(coffeeInServer))
		}
	}
	
	const createCoffeeFilter = () => {
		updateCoffeeDataFromAPI();
		if (filter && filter.length) {      
			return
		} else {
			if (coffeeItem) {
				let arr = []
				coffeeItem.map(coffee => arr.length < 9 ? arr.push(coffee) : null )
				setFilter(arr)
			}
		}
	};
 

	// Cart functions  
	const showCart = () => document.querySelector('.cart_list').classList.toggle('cart_items_display_none');
	
	const addToCart =  function(id) {
		let filteredCoffee = allItems.filter(coffee => coffee.id === id);
		if (cart.length) {
			let checked = 0;
			// eslint-disable-next-line array-callback-return
			cart.map(cart => {
				if (cart.id === filteredCoffee[0].id) {
					onCartIncrCoffee(id)
					checked = 1;
				}
			});  
			if (!checked) {
				return setCart(prevState => [...prevState, filteredCoffee[0]]);
			}
		} else return setCart(prevState => [...prevState, filteredCoffee[0]]);
	};
	
	const onDeleteFromCart = (id) => {
		setCart(!cart ? null : cart.filter(coffee => {
			return coffee.id !== id
		}))
	};
	
	const getTotalPrice = () => {
		if (cart) {
			let total = 0
			for (let i = 0; cart.length > i; i++) {
				if (cart[i].price) {
					let itemPrice = +(cart[i].price.slice(0, -1))
					total += itemPrice
				}
			}
			setTotalPrice(total.toFixed(2))
		}
	}

	const onCartIncrCoffee = (id) => {
		return !cart ? null : setCart(cart.map(item => {
			if (item.id === id) {
				let newPrice = '';
				// eslint-disable-next-line array-callback-return
				allItems.map(coffee => {
					if (coffee.id === id) {
						newPrice = (+item.price.slice(0, -1) + +coffee.price.slice(0, -1)).toFixed(2) + "$"
					}
				}) 
				return {
					...item,
					quantity: item.quantity + 1,
					price: newPrice
				}
			} else return item
		}))
	}

	const onCartDecrCoffee = (id) => {
		return !cart ? null : setCart(cart.map(item => {
			if (item.id === id) {
				if (item.quantity !== 0) {
					let newPrice = '';
					// eslint-disable-next-line array-callback-return
					allItems.map(coffee => {
						if (coffee.id === id) {
							newPrice = (+item.price.slice(0, -1) - +coffee.price.slice(0, -1 )).toFixed(2) + "$"
						}
					}) 
					return {
						...item,
						quantity: item.quantity - 1,
						price: newPrice
					}
				} else return item
			} else return item
		})) 
	};


  useEffect(() => {
		getCoffeeItems();
	},[])
	useEffect(() => {
		createCoffeeFilter();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[coffeeItem])
	useEffect(() => {
		getTotalPrice();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[cart])

  return (
    <>
      <Helmet>
        <meta name="description"
        content="App made by my own. I using here React."/>
        <title>Our Coffee</title>
      </Helmet>

      <Subheader subheaderBG={'subheader_our_coffee'} subheaderTitle="Our Coffee"/>
      <OurCoffee/>
      
      {loading ? <Spinner selectorId='preloader_for_items'/> : !filter ? <NotFoundCoffee visibleLink={false}/>
			: <RandomCoffee allItems={allItems} addToCart={addToCart}/>}

			<Cart cart = {cart} showCart={showCart} onDeleteFromCart={onDeleteFromCart} 
			totalPrice={totalPrice} onCartDecrCoffee={onCartDecrCoffee} 
			onCartIncrCoffee={onCartIncrCoffee} setCart={setCart} setTotalPrice={setTotalPrice} />
      
      <SearchAndFilterPanel coffeeItem={coffeeItem} coffeeInServer={coffeeInServer} 
      allItems={allItems} basicFilter={filter} cart={cart} totalPrice={totalPrice} 
      loading={loading} addToCart={addToCart} updateCoffeeDataFromAPI={updateCoffeeDataFromAPI} />
    </>
  )
};

export default OurCoffeePage;