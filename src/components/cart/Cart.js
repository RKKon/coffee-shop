import { useEffect, useState } from 'react';

import CartImg from '../../assets/icons/cart.png';
import TrashCan from '../../assets/icons/trash_can.png';

import Form from '../form/Form';
import { ShowMessageForm } from '../form/Form';

import './cart.sass';
import '../../assets/sass/style.sass';

const Cart = (props) => {
  const { cart, setCart, toggleCart, onDeleteFromCart, totalPrice, onCartDecrCoffee, onCartIncrCoffee,
    setTotalPrice } = props

  const [openedFrom, setOpenedForm] = useState(false);
  const [customerPhone, setCustomerPhone] = useState(null);
  const [sentForm, setSentForm] = useState(false)

  const openForm = () => {
    setOpenedForm(true)
    document.body.style.overflow = "hidden"
    toggleCart();
  };

  const closeForm = () => {
    setOpenedForm(false)
    document.body.style.overflow = '';
  };

  const sendForm = (e) => {
    e.preventDefault()
    const divError = document.createElement('div')
    divError.textContent = 'Please, enter correct phone number.'
    divError.classList.add('form_message_error_phone')

    let validPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$/;
    if (validPhone.test(customerPhone)) {
      setOpenedForm(false)
      document.body.style.overflow = '';
      console.log(customerPhone, `${totalPrice}$`, cart);
      setCart([])
      setTotalPrice(0)
      setSentForm(true)
      setTimeout(() => setSentForm(false), 3000) // close form message
    } else {
      console.error('You entered Incorrect value in form');
      const form = document.querySelector('.form').childNodes
      if (form[5]) form[5].remove()
      document.querySelector('.form_btn').after(divError)
      setSentForm(false)
    }
  };

  const handleKeyDownEnter = (e) => {
    if (e.code === 'Enter') {
      toggleCart();
    }
  };

  useEffect(() => {
    const handleElementByClick = (e) => {
      if (e.code === 'Escape') {
        closeForm();
        toggleCart()
      }
    };

    document.addEventListener('keydown', handleElementByClick)

    return () => document.removeEventListener('keydown', handleElementByClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='cart'>
      {openedFrom ? <Form closeForm={closeForm} sendForm={sendForm} customerPhoneValue={setCustomerPhone} /> : null}
      {sentForm ? <ShowMessageForm /> : null}

      <img tabIndex={5} className='cart_img' onKeyDown={handleKeyDownEnter} onClick={toggleCart} src={CartImg} alt="cart" />

      <div className="cart_list cart_items_display_none">
        <button className='cart_close' onClick={toggleCart}>&times;</button> {/* cross */}
        <p className='cart_title'>
          <span className='cart_title_item_margin'>Coffee name</span>
          {/* <span>Country</span> */}
          <span className='cart_title_amount'>Amount</span>
          <span>Price</span>
        </p>

        {!cart ? null : cart.map((cart, i) => {
          return (
            <div key={i} className='cart_item'>
              <span className='cart_item_name'>{cart.title ? cart.title : null}</span>
              {/* <span className='cart_item_country'>{cart.country}</span> */}
              <div className='cart_quantity'>
                <button className='cart_minus_quantity_btn' onClick={() => onCartDecrCoffee(cart.id)}>-</button>
                <span>{cart.quantity || cart.quantity === 0 ? cart.quantity : null}</span>
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
    </div>
  )
}

export default Cart