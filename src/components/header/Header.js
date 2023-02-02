import { Link, NavLink } from 'react-router-dom'

import './header.sass'
import '../../assets/sass/style.sass'
import headerCoffeeBeans from '../../assets/icons/header_coffee_beans.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header_flex">
        <img src={headerCoffeeBeans} alt="coffee beans"/>
        <nav>
          <ul className="header_flex_menu">
            <li className="header_item"><Link to="/">Coffee house</Link></li>
            <li className="header_item"><Link to="/ourCoffee">Our coffee</Link></li>
            <li className="header_item"><Link to="/yourPleasure">For your pleasure</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;