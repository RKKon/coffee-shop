import { Link } from "react-router-dom";

import "../../assets/sass/style.sass";
import "./footer.sass";

import telegram from '../../assets/icons/telegram.svg';
import linkedin from '../../assets/icons/Linkedin.png';
import whatsapp from '../../assets/icons/whatsApp.jpg';


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
      <div className="social_div">
        <a target="_blank" href={'https://t.me/rkfrostmorn'} rel="noreferrer">
          <img className="social_icon" src={telegram} alt="telegram" />
        </a>
        <a target="_blank" href={'https://api.whatsapp.com/send/?phone=375299994147&text&type=phone_number&app_absent=0'} rel="noreferrer">
          <img className="social_icon" src={whatsapp} alt="whatsapp" />
        </a>
        <a target="_blank" href={'https://www.linkedin.com/in/andrei-subach-17b29887/'} rel="noreferrer">
          <img className="social_icon" src={linkedin} alt="linkedin" />
        </a>
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
