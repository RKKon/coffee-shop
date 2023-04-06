import { Link } from 'react-router-dom';

import Img404 from '../../assets/img/404page.jpg'

const Page404 = () => {
  return (
    <>
      <h2 className='coffee_not_found_title'>Sorry we didn't find the page.</h2>
      <Link to='/coffee-shop'>
        <button className='page_not_found_text'>Back to main page</button> 
      </Link>
      <img className='page_not_found_img' src={Img404} alt="page not found" />
    </>
  )
}

export default Page404;