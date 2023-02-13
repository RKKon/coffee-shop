import CartImg from '../../assets/icons/cart.png';
import TrashCan from '../../assets/icons/trash_can.png';

const Cart = (props) => {
  const {cart, showCart, onDeleteFromCart, totalPrice, onCartDecrCoffee, onCartIncrCoffee, openForm} = props
  return (
    <div className='cart'>
      <img className='cart_img' onClick={showCart} src={CartImg} alt="cart" />
      
      <div className="cart_list cart_items_display_none">
      <button className='cart_close' onClick={showCart}>&times;</button> {/* cross */}
        <p className='cart_title'>
          <span className='cart_title_item_margin'>Coffee name</span>
          {/* <span>Country</span> */}
          <span className='cart_title_amount'>Amount</span>
          <span>Price</span>
        </p>

        {!cart ? null : cart.map((cart, i) => {
          return (
            <div key={i} className='cart_item'>
              <span className='cart_item_name'>{cart.title ? cart.title :null}</span> 
              {/* <span className='cart_item_country'>{cart.country}</span> */} 
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
  </div>
  )
}

export default Cart