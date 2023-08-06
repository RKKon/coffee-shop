import { Helmet } from "react-helmet";

import SubheaderMain from "../subheaderMain/SubheaderMain";
import AboutUs from "../aboutUs/AboutUs";
import MainPageContent from "./MainPageContent";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="App made by my own. I using here React." />
        <title>Coffee Shop</title>
      </Helmet>

      <SubheaderMain />
      <MainPageContent />
      <AboutUs />
    </>
  );
};

export default MainPage;
