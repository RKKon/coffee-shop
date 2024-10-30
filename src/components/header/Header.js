import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./header.sass";
import "../../assets/sass/style.sass";
import headerCoffeeBeans from "../../assets/icons/header_coffee_beans.png";

import RegistrationForm from "../registrationForm/RegistrationForm";
import LogInForm from "../logInForm/LogInForm";

const Header = () => {
  const [openRegForm, setOpenRegForm] = useState(false);
  const [openLogInForm, setOpenLogInForm] = useState(false);
  const [activeClass, setActiveClass] = useState(0);

  const toggleRegForm = (open = false) => setOpenRegForm(open);
  const toggleLogInForm = (open = false) => setOpenLogInForm(open);

  const handleChangeActiveClass = (i = 0) => setActiveClass(i);

  return (
    <header className="header">
      <div className="header_flex">
        <img src={headerCoffeeBeans} alt="coffee beans" />
        <nav>
          <ul className="header_flex_menu">
            <li className="header_item">
              <Link tabIndex={1}
                className={`${activeClass === 0 ? "header_active" : ""}`}
                onClick={() => handleChangeActiveClass(0)}
                to="/coffee-shop"
              >
                Coffee house
              </Link>
            </li>
            <li className="header_item">
              <Link tabIndex={2}
                className={`${activeClass === 1 ? "header_active" : ""}`}
                onClick={() => handleChangeActiveClass(1)}
                to="/coffee-shop/ourCoffee"
              >
                Our coffee
              </Link>
            </li>
            <li className="header_item">
              <Link tabIndex={3}
                className={`${activeClass === 2 ? "header_active" : ""}`}
                onClick={() => handleChangeActiveClass(2)}
                to="/coffee-shop/yourPleasure"
              >
                For your pleasure
              </Link>
            </li>
            <li onClick={() => toggleRegForm(true)} tabIndex={4}
              className="header_item header_item_from">
              Sign in
            </li>
          </ul>
        </nav>
      </div>
      {openRegForm ? (
        <RegistrationForm toggleRegForm={toggleRegForm} toggleLogInForm={toggleLogInForm} />
      ) : null}
      {openLogInForm ? (
        <LogInForm toggleLogInForm={toggleLogInForm} toggleRegForm={toggleRegForm} />
      ) : null}
    </header>
  );
};

export default Header;
