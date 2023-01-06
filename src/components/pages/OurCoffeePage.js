import { Helmet } from 'react-helmet';

import Subheader from '../subheader/Subheader';
import OurCoffee from '../ourCoffee/OurCoffee';
import SearchAndFilterPanel from '../searchAndFilterPanel/SearchAndFilterPanel';

const OurCoffeePage = () => {
  
  return (
    <>
      <Helmet>
        <meta name="description"
        content="App made by my own. I using here React."/>
        <title>Our Coffee</title>
      </Helmet>

      <Subheader subheaderBG={'subheader_our_coffee'} subheaderTitle="Our Coffee"/>
      <OurCoffee/>
      <SearchAndFilterPanel/>
    </>
  )
};

export default OurCoffeePage;