import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchJson } from '../pages/Server';

import '../../assets/sass/style.sass';
import './searchPanel.sass';

import Cart from '../../assets/icons/cart.png';
import TrashCan from '../../assets/icons/trash_can.png';


const SearchAndFilterPanel = () => {
  const [coffeeItem, SetCoffeeItem] = useState(null);
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  

  const getFetch = () => FetchJson(SetCoffeeItem);
  
  const createCoffeeFilter = () => setFilter(structuredClone(coffeeItem));

  const mainFilter = (country) => {
    if (country) {
      setFilter(coffeeItem.filter(coffee => coffee.country === country))
    }
  };

  const searchFilter = (e) => { 
    let letters = e.target.value;
    setSearch(letters)
    setFilter(coffeeItem.filter(coffee => coffee.title.toLowerCase().indexOf(letters) > -1)) 
  };
 
  const showCart = () => document.querySelector('.cart_list').classList.toggle('cart_items_display_none');
  
  const addToCart =  function(id) {
    const filteredCoffee = coffeeItem.filter(coffee => coffee.id === id); 
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
        let itemPrice = +(cart[i].price.slice(0, -1))
        total += itemPrice
      }
      setTotalPrice(total.toFixed(2))
    }
  }
  const onCartIncrCoffee = (id) => {
    return !cart ? null : setCart(cart.map(item => {
      if (item.id === id) {
        let newPrice = '';
        coffeeItem.map(coffee => {
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
          coffeeItem.map(coffee => {
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

  useEffect(() => {
    getFetch()
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
      <div className='cart'>
        <img className='cart_img' onClick={showCart} src={Cart} alt="cart" />
        <div className="cart_list cart_items_display_none">
          {/* {!cart ? null : console.log(cart)} */}
          <p className='cart_title'>
            <span className='cart_title_item_margin'>Coffee name</span>
            <span>Country</span>
            <span>Amount</span>
            <span>Price</span>
          </p>

          {!cart ? null : cart.map((cart, i) => {
            return (
              <p key={i} className='cart_item'>
                <span className='cart_item_name'>{cart.title}</span> 
                <span className='cart_item_country'>{cart.country}</span> 
                <button onClick={() => onCartDecrCoffee(cart.id)}>-</button>
                <span>{cart.quantity}</span>
                <button onClick={() => onCartIncrCoffee(cart.id)}>+</button>
                <span className='cart_item_price'>{cart.price}</span> 
                <button onClick={() => onDeleteFromCart(cart.id)} className='cart_trash_can'><img src={TrashCan} alt="trash can" /></button>
              </p>             
            )
          })}
          <p className='cart_total'>Total: {totalPrice}$</p>
          <button className='buy_btn cart_btn'>Get Coffee</button>
        </div>
      </div>

      <div className="search_menu_flex">
        <div>
          <label htmlFor="searchCoffee">Looking for</label>
          <input onChange={searchFilter} value={search} id="searchCoffee" name="searchCoffee" type="text" placeholder="start typing here..."/>
        </div>
        <div>
          <label className="filter_mr" htmlFor="filerCoffee">Or filter</label>
          <input onClick={getFetch} className="filter_style" type="button" value="AllCoffee" id="all" name="allCoffee"/>
          <input onClick={() => mainFilter('Brazil')} className="filter_style" type="button" value="Brazil" id="brazil" name="brazil"/>
          <input onClick={() => mainFilter('Kenya')} className="filter_style" type="button" value="Kenya" id="kenya" name="kenya"/>
          <input onClick={() => mainFilter('Columbia')} className="filter_style" type="button" value="Columbia" id="columbia" name="columbia"/>
        </div>
      </div>

      <ul className="search_flex">
        {filter ? <View coffeeItem={filter} addToCart={addToCart} /> : null}
      </ul>
    </section>
  )
};

const View = (props) => {
  const {coffeeItem, addToCart} = props;

  return (
    <>
      {
        coffeeItem.map(coffeeItem => {
          return (
            <li key={coffeeItem.id} className="search_flex_item">
              <Link to={coffeeItem.link}>
                <img className="search_item_img" src={coffeeItem.coffeeImg} alt={coffeeItem.title}/>
                <h3 className="coffee_name">{coffeeItem.title}</h3>
                <p className="coffee_country">{coffeeItem.country}</p>
                <p className="coffee_price">{coffeeItem.price}</p>
              </Link>
                <button onClick={() => addToCart(coffeeItem.id)} className='buy_btn'>Buy now
                </button>
            </li>
          )
        })
      }
    </>
  )
};

export default SearchAndFilterPanel;