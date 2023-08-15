import { Link } from "react-router-dom";

import "../../assets/sass/style.sass";
import "./footer.sass";

import footerCoffeeBeans from "../../assets/icons/footer_coffee_beans.jpg";
import coffeeBeans from "../../assets/icons/main_page_coffee_beans.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_flex">
        <img src={footerCoffeeBeans} alt="coffee beans" />
        <nav>
          <ul className="footer_flex_menu">
            <li className="footer_menu_item">
              <Link to="/coffee-shop">Coffee house</Link>
            </li>
            <li className="footer_menu_item">
              <Link to="/coffee-shop/ourCoffee">Our coffee</Link>
            </li>
            <li className="footer_menu_item">
              <Link to="/coffee-shop/yourPleasure">For your pleasure</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex_wrapper_beans">
        <div className="flex_beans">
          <div className="left_line"></div>
          <img className="coffee_beans_img" src={coffeeBeans} alt="coffee beans" />
          <div className="right_line"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
