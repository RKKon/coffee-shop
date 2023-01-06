import '../../assets/sass/style.sass';
import './ourCoffee.sass';

import ourCoffeeImg from '../../assets/img/our_coffee.jpg';
import pageCoffeeBeans from '../../assets/icons/main_page_coffee_beans.png'

const OurCoffee = () => {
  return (
    <section className="our_coffee">
      <div className="our_coffee_flex">
        <img className="about_our_beans_img" src={ourCoffeeImg} alt="our coffee"/>

        <div className="about_our_beans_description">
          <h2 className="content_title">About our beans</h2>
          <div className="flex_wrapper_beans">
            <div className="flex_beans about_us_margin_beans">
              <div className="left_line"></div>
              <img className="coffee_beans_img" src={pageCoffeeBeans} alt="coffee beans"/>
              <div className="right_line"></div>
            </div>
          </div>
          <p className="text">Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.
            <br/><br/>
            Afraid at highly months do things on at. Situation recommend objection do intention
            <br/>
            so questions.
            <br/>
            As greatly removed calling pleased improve an. <br/> Last ask him cold feel <br/>
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.</p>
        </div>
      </div>
      <div className="big_line"></div>
    </section>
  )
}

export default OurCoffee;