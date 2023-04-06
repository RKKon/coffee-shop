import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

import './header.sass'
import '../../assets/sass/style.sass'
import headerCoffeeBeans from '../../assets/icons/header_coffee_beans.png'

import RegistrationForm from '../registrationForm/RegistrationForm';
import LogInForm from '../logInForm/LogInForm'

const Header = () => {
  const [openRegForm, setOpenRegForm] = useState(false)
  const [openLogInForm, setOpenLogInForm] = useState(false)

  const toggleRegForm = (open = false) => setOpenRegForm(open); 
  const toggleLogInForm = (open = false) => setOpenLogInForm(open);
  
  return (
    <header className="header">
      <div className="header_flex">
        <img src={headerCoffeeBeans} alt="coffee beans"/>
        <nav>
          <ul className="header_flex_menu">
            <li className="header_item"><Link to="/">Coffee house</Link></li>
            <li className="header_item"><Link to="/ourCoffee">Our coffee</Link></li>
            <li className="header_item"><Link to="/yourPleasure">For your pleasure</Link></li>
            <li onClick={() => toggleRegForm(true)} className="header_item header_item_from">Sign in</li>
          </ul>
        </nav>
      </div>
      {openRegForm ? <RegistrationForm toggleRegForm={toggleRegForm} toggleLogInForm={toggleLogInForm} /> : null}
      {openLogInForm ? <LogInForm toggleLogInForm={toggleLogInForm} toggleRegForm={toggleRegForm} /> : null}
    </header>
  )
}

export default Header;