import { Helmet } from "react-helmet";

import Subheader from "../subheader/Subheader";
import ForYourPleasure from "../forYourPleasure/ForYourPleasure";

const YourPleasurePage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="App made by my own. I using here React."/>
        <title>For your pleasure</title>
      </Helmet>

      <Subheader subheaderBG={'subheader_your_pleasure'} subheaderTitle="For your pleasure"/>
      <ForYourPleasure/>
      {/* <SearchAndFilterPanel/> */} {/* it is need to change, because almost copy */}
    </>
  )
};

export default YourPleasurePage;