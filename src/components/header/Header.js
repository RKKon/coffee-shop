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
            <li className="header_item"><a href="#">Coffee house</a> </li>
            <li className="header_item"><a href="#">Our coffee</a></li>
            <li className="header_item"><a href="#">For your pleasure</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;