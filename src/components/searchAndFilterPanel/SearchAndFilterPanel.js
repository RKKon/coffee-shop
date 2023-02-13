import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchJson, CoffeeAPI } from '../pages/Server';

import '../../assets/sass/style.sass';
import './searchPanel.sass';

// import CartImg from '../../assets/icons/cart.png';
// import TrashCan from '../../assets/icons/trash_can.png';
import Form from '../form/Form';
import Cart from '../cart/Cart';

const SearchAndFilterPanel = () => {
  const [coffeeItem, setCoffeeItem] = useState(null);
  const [coffeeInServer, setCoffeeInServer] = useState(null)
  const [allItems, setAllItems] = useState(null)
  const [filter, setFilter] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const coffeePrices = ['1.29$', "2.30$", '3.10$', '1.99$', '2.00$','1.69$', '3.10$', '4.99$', '2.49$', '1.99$', '2.20$', '2.99$', '3.99$', '2.59$', '2.99$', '3.49$', '2.10$', '1.49$', '2.30$', '4.29$'];
  const [openedFrom, setOpenedForm] = useState(false)
  const [customerPhone, setCustomerPhone] = useState(null)

  const getCoffeeItems = async () => {
    await CoffeeAPI(setCoffeeItem);
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
  }

  const mainFilter = (myFilter) => {
    if (myFilter === 'allItems') {
      setFilter(allItems)
    } else if (myFilter === 'drinkCoffee') {
      setFilter(coffeeItem)
    } else if (myFilter === 'coffeeBeans') {
      setFilter(coffeeInServer)
    } else console.log('Happened an error');
  };

  const searchFilter = (e) => { 
    let letters = e.target.value;
    setSearch(letters)
    setFilter(allItems.filter(coffee => coffee.title.toLowerCase().indexOf(letters) > -1)) 
  };
 
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
  }

  const openForm = () => { 
    setOpenedForm(true) 
    document.body.style.overflow = "hidden"
    showCart();
  }

  const closeForm = () => {
    setOpenedForm(false)
    document.body.style.overflow = '';
  }
  
  const sendForm = (e) => {
    e.preventDefault ()
    let validPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$/;
    if (validPhone.test(customerPhone)) {
      setOpenedForm(false)
      document.body.style.overflow = '';
      console.log(customerPhone, `${totalPrice}$`, cart); 
      setCart([])
      setTotalPrice(0)
    } else console.log('error');
  }


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
    <section className="search_and_filter_panel">
      {openedFrom ? <Form closeForm={closeForm} sendForm={sendForm} customerPhoneValue={setCustomerPhone} /> : null}
      
      <Cart cart = {cart} showCart={showCart} onDeleteFromCart={onDeleteFromCart} 
      totalPrice={totalPrice} onCartDecrCoffee={onCartDecrCoffee} 
      onCartIncrCoffee={onCartIncrCoffee} openForm={openForm} />
      
      {/* <div className='cart'>
        <img className='cart_img' onClick={showCart} src={CartImg} alt="cart" />
        <div className="cart_list cart_items_display_none">
        <button className='cart_close' onClick={showCart}>&times;</button> 
          <p className='cart_title'>
            <span className='cart_title_item_margin'>Coffee name</span>
            <span className='cart_title_amount'>Amount</span>
            <span>Price</span>
          </p>

          {!cart ? null : cart.map((cart, i) => {
            return (
              <div key={i} className='cart_item'>
                <span className='cart_item_name'>{cart.title ? cart.title :null}</span> 
                <div className='cart_quantity'>
                  <button className='cart_minus_quantity_btn' onClick={() => onCartDecrCoffee(cart.id)}>-</button>
                  <span>{cart.quantity ? cart.quantity : null}</span>
                  <button className='cart_plus_quantity_btn' onClick={() => onCartIncrCoffee(cart.id)}>+</button>
                </div>
                <span className='cart_item_price'>{cart.price ? cart.price : null}</span> 
                <button onClick={() => onDeleteFromCart(cart.id ? cart.id : null)} className='cart_trash_can'><img src={TrashCan} alt="trash can" /></button>
              </div>             
            )
          })}
          <p className='cart_total'>Total: {totalPrice ? totalPrice : null}$</p>
          <button onClick={openForm} className='buy_btn cart_btn'>Get Coffee</button>
        </div>
      </div> */}

      <div className="search_menu_flex">
        <div>
          <label htmlFor="searchCoffee">Looking for</label>
          <input onChange={searchFilter} value={search} id="searchCoffee" name="searchCoffee" type="text" placeholder="start typing here..."/>
        </div>
        <div>
          <label className="filter_mr" htmlFor="filerCoffee">Or filter</label>
          <input onClick={() => mainFilter('allItems')} className="filter_style" type="button" value="All Coffee" id="all" name="allCoffee"/>
          <input onClick={() => mainFilter('drinkCoffee')} className="filter_style" type="button" value="Drink coffee" id="brazil" name="brazil"/>
          {/* <input onClick={() => mainFilter('Kenya')} className="filter_style" type="button" value="coffee beans" id="kenya" name="kenya"/> */}
          <input onClick={() => mainFilter('coffeeBeans')} className="filter_style" type="button" value="Coffee beans" id="columbia" name="columbia"/>
        </div>
      </div>

      <ul className="search_flex">
        {filter ? <View filteredCoffeeItem={filter} addToCart={addToCart} /> : null}
      </ul>
      <button onClick={() => {
        document.querySelector('.btn_see_all_coffee').style.display = 'none'; 
        mainFilter('allItems')
      }} className='btn_see_all_coffee'>See all coffee</button>
    </section>
  )
};

const View = (props) => {
  const {filteredCoffeeItem, addToCart} = props;
  return (
    <>
      {
        filteredCoffeeItem.map(coffeeItem => {
          return (
            <li key={coffeeItem.id ? coffeeItem.id : null} className="search_flex_item">
              <Link to={`/${coffeeItem.id ? coffeeItem.id : null}`}>
                <img className="search_item_img" src={coffeeItem.image ?coffeeItem.image : null} 
                alt={coffeeItem.title ? coffeeItem.title : null}/>
                <h3 className="coffee_name">{coffeeItem.title ? coffeeItem.title : null}</h3>
                <p className="coffee_country">Ingredients:<span> {coffeeItem.ingredients ? coffeeItem.ingredients.join(', ') : null}</span></p>
                <p className="coffee_price">{coffeeItem.price ? coffeeItem.price : null}</p>
              </Link>
                <button onClick={() => addToCart(coffeeItem.id ? coffeeItem.id : null)} className='buy_btn'>Buy now
                </button>
            </li>
          )
        })
      }
    </>
  )
};

export default SearchAndFilterPanel;