import { Link } from 'react-router-dom';

import '../../assets/sass/style.sass';
import './subheaderMain.sass';

import coffeeBeansImg from '../../assets/icons/subheader_coffee_beans.png'

const SubheaderMain = () => {
  return (
    <section className="subheader_main_page">
      <div className="container">
        <div className="subheader_main_page_content">
          <h1 className="title">Everything You Love About Coffee</h1>
          <div className="flex_wrapper_beans">
            <div className="flex_beans">
              <div className="left_line white_line"></div>
              <img className="coffee_beans_img" src={coffeeBeansImg} alt="coffee beans"/>
              <div className="right_line white_line"></div>
            </div>
          </div>
          <h3 className="sub_title">We makes every day full of energy and taste</h3>
          <h3 className="sub_title mb_10">Want to try our beans?</h3>
          <Link to="/ourCoffee"><button className="btn">More</button></Link>
        </div>
      </div>
    </section>
  )
}

export default SubheaderMain;