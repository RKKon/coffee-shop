import '../../assets/sass/style.sass';
import coffeeBeansImg from '../../assets/icons/main_page_coffee_beans.png'

const AboutUs = () => {
  return (
    <section className="about_us">
      <h2 className="content_title">About Us</h2>
      <div className="flex_wrapper_beans">
        <div className="flex_beans about_us_margin_beans">
          <div className="left_line"></div>
          <img className="coffee_beans_img" src={coffeeBeansImg} alt="coffee beans"/>
          <div className="right_line"></div>
        </div>
      </div>
      <p className="text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.
        <br/><br/>
        Now residence dashwoods she excellent you. Shade being under his bed her, Much
        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
        horrible but confined day end marriage. Eagerness furniture set preserved far
        recommend. Did even but nor are most gave hope. Secure active living depend son
        repair day ladies now.</p>
    </section>
  )
}

export default AboutUs;