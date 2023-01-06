import '../../assets/sass/style.sass';
import './coffeeItemPage.sass';

import itemCoffee from '../../assets/img/item_coffee.jpg';
import coffeeBeans from '../../assets/icons/main_page_coffee_beans.png';

const CoffeeItemPage = () => {
  return (
    <section className="coffee_item_main">
      <div className="coffee_item_main_flex">
        <img className="coffee_page_item_img" src={itemCoffee} alt="our coffee"/>

        <div className="about_our_beans_description">
          <h2 className="content_title">About it</h2>
          <div className="flex_wrapper_beans">
            <div className="flex_beans about_us_margin_beans">
              <div className="left_line"></div>
              <img className="coffee_beans_img" src={coffeeBeans} alt="coffee beans"/>
              <div className="right_line"></div>
            </div>
          </div>
          <p className="bold_text item_mb">Country:<span> Brasil</span></p> 
          <p className="item_mb"><span className="bold_text">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="bold_text">Price: <span className="item_big_price"> 16.99$</span></p> 
        </div>
      </div>
    </section>
  )
}

export default CoffeeItemPage;