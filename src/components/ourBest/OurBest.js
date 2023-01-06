import '../../assets/sass/style.sass';
import './ourBest.sass';

import BestCoffeeOne from '../../assets/img/main_coffee_1.png';
import BestCoffeeTwo from '../../assets/img/main_coffee_3.png';
import BestCoffeeThree from '../../assets/img/layout_coffee.png';

const OurBest = () => {
  return (
    <section className="our_best">
      <div className="container">
        <h2 className="content_title">Our best</h2>
        <div className="our_best_flex_wrapper">
          <div className="our_best_flex">
            <div className="our_best_flex_item">
              <img className="our_best_img" src={BestCoffeeOne} alt="best coffee"/>
              <h3 className="coffee_name">Solimo Coffee Beans 2 kg</h3>
              <p className="coffee_price">10.73$</p>
            </div>
            <div className="our_best_flex_item">
              <img className="our_best_img" src={BestCoffeeTwo} alt="best coffee"/>
              <h3 className="coffee_name">Presto Coffee Beans 1 kg</h3>
              <p className="coffee_price">15.99$</p>
            </div>
            <div className="our_best_flex_item">
              <img className="our_best_img" src={BestCoffeeThree} alt="best coffee"/>
              <h3 className="coffee_name">AROMISTICO Coffee 1 kg</h3>
              <p className="coffee_price">6.99$</p>
            </div>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBest;