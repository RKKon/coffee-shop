import { Link } from 'react-router-dom';
import Img404 from '../../assets/img/404.jpg'

const NotFoundCoffee = ({selector = "coffee_not_found", visibleLink = true}) => {
  return (
    <>
      <h2 className='coffee_not_found_title'>Sorry we didn't find coffee. Try later</h2>
      {visibleLink ? 
      <Link to='/'>
        <button className='page_not_found_text'>Back to main page</button> 
      </Link> : null}
      
      <img className={selector} src={Img404} alt="coffee not found" />
    </>
  )
}

export default NotFoundCoffee;