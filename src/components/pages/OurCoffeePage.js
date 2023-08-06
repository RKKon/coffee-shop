import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { FetchJson } from "../pages/Server";
// import { CoffeeAPI } from "../pages/Server";

import Subheader from "../subheader/Subheader";
import OurCoffee from "../ourCoffee/OurCoffee";
import OurBest from "../ourBest/OurBest";

import "../../assets/sass/style.sass";
import "../searchAndFilterPanel/searchPanel.sass";

const OurCoffeePage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="App made by my own. I using here React." />
        <title>Our Coffee</title>
      </Helmet>

      <Subheader subheaderBG={"subheader_our_coffee"} subheaderTitle="Our Coffee" />
      <OurCoffee />
      <OurBest />
    </>
  );
};

export default OurCoffeePage;
