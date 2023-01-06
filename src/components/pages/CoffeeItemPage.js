import { Helmet } from "react-helmet";

import Subheader from "../subheader/Subheader";
import CoffeeItemPage from "../coffeeItemPage/CoffeeItemPage";

const CoffeeItemSinglePage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="App made by my own. I using here React."/>
        <title>Coffee item page</title>
      </Helmet>

      <Subheader subheaderBG={'subheader_our_coffee'} subheaderTitle="Our Coffee"/>
      <CoffeeItemPage/>
    </>
  )
};

export default CoffeeItemSinglePage;