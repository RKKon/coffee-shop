import '../../assets/sass/style.sass';
import './searchPanel.sass'

import layoutCoffee from '../../assets/img/layout_coffee.png'

const SearchAndFilterPanel = () => {
  return (
    <section className="search_and_filter_panel">

      <div className="search_menu_flex">
        <div>
          <label htmlFor="searchCoffee">Looking for</label>
          <input type="text" id="searchCoffee" name="searchCoffee" placeholder="start typing here..."/>
        </div>
        <div>
          <label className="filter_mr" htmlFor="filerCoffee">Or filter</label>
          <input className="filter_style" type="button" value="Brazil" id="brazil" name="filerCoffeeOne"/>
          <input className="filter_style" type="button" value="Kenya" id="kenya" name="filerCoffeeTwo"/>
          <input className="filter_style" type="button" value="Columbia" id="columbia" name="filerCoffeeThree"/>
        </div>
      </div>

      <ul className="search_flex">

        <li className="search_flex_item">
          <a href="#">
            <img className="search_item_img" src={layoutCoffee} alt="search coffee"/>
            <h3 className="coffee_name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee_country">Brazil</p>
            <p className="coffee_price">6.99$</p>
          </a>
        </li>

        <li className="search_flex_item">
          <a href="#">
            <img className="search_item_img" src={layoutCoffee} alt="search coffee"/>
            <h3 className="coffee_name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee_country">Kenya</p>
            <p className="coffee_price">7.99$</p>
          </a>
        </li> 

        <li className="search_flex_item">
          <a href="#">
            <img className="search_item_img" src={layoutCoffee} alt="search coffee"/>
            <h3 className="coffee_name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee_country">Columbia</p>
            <p className="coffee_price">8.99$</p>
          </a>
        </li> 

        <li className="search_flex_item">
          <a href="#">
            <img className="search_item_img" src={layoutCoffee} alt="search coffee"/>
            <h3 className="coffee_name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee_country">Brazil</p>
            <p className="coffee_price">6.99$</p>
          </a>
        </li>

        <li className="search_flex_item">
          <a href="#">
            <img className="search_item_img" src={layoutCoffee} alt="search coffee"/>
            <h3 className="coffee_name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee_country">Brazil</p>
            <p className="coffee_price">6.99$</p>
          </a>
        </li>

        <li className="search_flex_item">
          <a href="#">
            <img className="search_item_img" src={layoutCoffee} alt="search coffee"/>
            <h3 className="coffee_name">AROMISTICO Coffee 1 kg</h3>
            <p className="coffee_country">Brazil</p>
            <p className="coffee_price">6.99$</p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default SearchAndFilterPanel;